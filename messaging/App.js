import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableHighlight,
  Image,
  BackHandler,
} from 'react-native';
import { Constants } from 'expo';

import Status from './components/Status';
import MessageList from './components/MessageList';
import {
  createImageMessage,
  createLocationMessage,
  createTextMessage,
} from './utils/MessageUtils';
import Toolbar from './components/ToolBar';
import ImageGrid from './components/ImageGrid';
import KeyboardState from './components/KeyboardState';
import MeasureLayout from './components/MeasureLayout';
import MessagingContainer, {
  INPUT_METHOD,
} from './components/MessagingContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        createImageMessage('https://picsum.photos/300/300'),
        createImageMessage('https://picsum.photos/500/500/?random'),
        createTextMessage('World'),
        createTextMessage('Hello'),
        createLocationMessage({
          latitude: 37.78825,
          longitude: -122.4324,
        }),
      ],
      fullscreenImageId: null,
      isInputFocused: false,
      inputMethod: INPUT_METHOD.NONE,
    };
  }

  /**
   * 图片渲染
   */
  componentWillMount() {
    this.subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        const { fullscreenImageId } = this.state;

        if (fullscreenImageId) {
          this.dismissFullscreenImage();
          return true;
        }

        return false;
      }
    );
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  dismissFullscreenImage = () => {
    this.setState({ fullscreenImageId: null });
  };

  /**
   * 消息列表
   */
  handlePressMessage = ({ id, type }) => {
    switch (type) {
      case 'text':
        Alert.alert(
          'Delete message?',
          'Are you sure you want to permanently delete this message ?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => {
                const { messages } = this.state;
                this.setState({
                  messages: messages.filter(message => message.id !== id),
                });
              },
            },
          ]
        );
        break;
      case 'image':
        this.setState({ fullscreenImageId: id, isInputFocused: false });
        break;
      default:
        break;
    }
  };

  /**
   * 工具条
   */
  hanldeChangeInputMethod = inputMethod => {
    this.setState({ inputMethod });
  };

  handlePressToolbarCamera = () => {
    this.setState({
      isInputFocused: false,
      inputMethod: INPUT_METHOD.CUSTOM,
    });
  };

  handlePressToolbarLocation = () => {
    const { messages } = this.state;
    navigator.geolocation.getCurrentPosition(
      position => {
        const {
          coords: { latitude, longitude },
        } = position;
        this.setState({
          messages: [
            createLocationMessage({ latitude, longitude }),
            ...messages,
          ],
        });
      },
      error => {
        console.log(error);
      }
    );
  };

  hanldeChangeFocus = isFocused => {
    this.setState({ isInputFocused: isFocused });
  };

  handleSubmit = text => {
    const { messages } = this.state;

    this.setState({
      messages: [createTextMessage(text), ...messages],
    });
  };

  /**
   * 自定義鍵盤區
   */
  handlePressImage = uri => {
    const { messages } = this.state;

    this.setState({
      messages: [createImageMessage(uri), ...messages],
    });
  };

  /**
   * 渲染各個組件
   */
  renderFullscreenImage = () => {
    const { messages, fullscreenImageId } = this.state;

    if (!fullscreenImageId) return null;

    const image = messages.find(message => message.id === fullscreenImageId);

    if (!image) return null;

    const { uri } = image;

    return (
      <TouchableHighlight
        style={styles.fullscreenOverlay}
        onPress={this.dismissFullscreenImage}>
        <Image style={styles.fullscreenImage} source={{ uri }} />
      </TouchableHighlight>
    );
  };

  renderToolbar() {
    const { isInputFocused } = this.state;

    return (
      <View style={styles.toolbar}>
        <Toolbar
          isFocused={isInputFocused}
          onSubmit={this.handleSubmit}
          onChangeFocus={this.hanldeChangeFocus}
          onPressCamera={this.handlePressToolbarCamera}
          onPressLocation={this.handlePressToolbarLocation}
        />
      </View>
    );
  }

  renderMessageList() {
    const { messages } = this.state;

    return (
      <View style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={this.handlePressMessage}
        />
      </View>
    );
  }

  renderInputMethodEditor = () => {
    return (
      <View style={styles.inputMethodEditor}>
        <ImageGrid onPressImage={this.handlePressImage} />
      </View>
    );
  };

  render() {
    const { inputMethod } = this.state;
    return (
      <View style={styles.container}>
        <Status />
        <MeasureLayout>
          {layout => (
            <KeyboardState layout={layout}>
              {keyboardInfo => (
                <MessagingContainer
                  {...keyboardInfo}
                  inputMethod={inputMethod}
                  onChangeInputMethod={this.hanldeChangeInputMethod}
                  renderInputMethodEditor={this.renderInputMethodEditor}
                >
                  {this.renderMessageList()}
                  {this.renderToolbar()}
                </MessagingContainer>
              )}
            </KeyboardState>
          )}
        </MeasureLayout>
        {this.renderFullscreenImage()}
      </View>
    );
  }
}
// {this.renderToolbar()}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 2,
  },
  fullscreenImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});
