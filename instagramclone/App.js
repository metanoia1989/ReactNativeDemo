import React, { Component } from 'react';
import {  
  View, 
  StyleSheet,
  Platform,
  Modal,
  AsyncStorage,
} from 'react-native';
import { Constants } from 'expo';

import Feed from './screens/Feed';
import Comments from './screens/Comment';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      commentsForItem: {}, // 評論容器，圖片id為鍵
      showModal: false,
      selectedItemId: null, // 查看的圖片id
    };
  }

  /**
   * 加載 App 組件之前，先讀取本地存儲的評論
   */
  async componentDidMount(){
    try {
      const commentsForItem = await AsyncStorage.getItem(
        ASYNC_STORAGE_COMMENTS_KEY,
      );
      this.setState({
        commentsForItem: commentsForItem ? JSON.parse(commentsForItem) : {},
      });
    } catch (e) {
      console.log('Failed to load comments')
    }
  }

  /**
   * 打開評論頁
   */
  openCommentScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    });
  };

  /**
   * 關閉評論頁
   */
  closeCommentScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null,
    });
  };

  /**
   * 更新評論
   */
  onSubmitComment = text => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || [];
    
    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    };

    this.setState({ commentsForItem: updated });
    
    try {
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.log('Failed to save comment ', text, ' for ', selectedItemId);
    }
  };



  render() {
    const { commentsForItem, showModal, selectedItemId } = this.state;
    const comments = commentsForItem[selectedItemId] || [];

    return (
      <View style={styles.container}>
        <Feed 
          style={styles.feed}
          commentsForItem={commentsForItem}
          onPressComments={this.openCommentScreen} 
        />
        <Modal 
          visible={showModal}
          animationType='slide'
          onRequestClose={this.closeCommentScreen}
        >
          <Comments 
            style={styles.comments}
            comments={comments}
            onClose={this.closeCommentScreen}
            onSubmitComment={this.onSubmitComment}
          />
        </Modal>
      </View>
      
    );
  }
}

const platformVersion = Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;
const normalStatusBarHeight = Platform.OS === 'android' || platformVersion < 11 ? Constants.statusBarHeight : 0;
const modalStatusBarHeight = Platform.OS === 'ios' && platformVersion < 11 ? Constants.statusBarHeight : 0;
const styles = StyleSheet.create({
  container: {
    //marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    flex: 1,
  },
  feed: {
    flex: 1,
    marginTop: normalStatusBarHeight,
  },
  comments: {
    flex: 1,
    marginTop: modalStatusBarHeight,
  },
});
