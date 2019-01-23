import React, { Component } from 'react';
import { 
  CameraRoll, 
  Image, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Permissions } from 'expo';

import PropTypes from 'prop-types';

import Grid from './Grid';



export default class ImageGrid extends Component {
  /**
   * 组件属性验证
   */
  static propTypes = {
    onPressImage: PropTypes.func,
  };

  static defaultProps = {
    onPressImage: () => {},
  };

  /**
   * 组件初始化
   */
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  loading = false;
  cursor = null;

  componentDidMount() {
    this.getImages();
  }

  /**
   * 第一次获取相册图片
   */
  getImages = async (after) => {
    if(this.loading) return;

    this.loading  = true;

    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if(status !== 'granted') {
      console.log('Camera roll permission denied');
      return;
    }

    const results = await CameraRoll.getPhotos({ 
      first: 20,
      after,
    });

    const { edges, page_info: { has_next_page, end_cursor } } = results;

    const loadedImages = edges.map(item => item.node.image);

    this.setState({ 
      images: this.state.images.concat(loadedImages), 
    }, () => {
      this.loading = false;
      this.cursor = has_next_page ? end_cursor : null;
    });
  };

  /**
   * 继续获取相册图片
   */
  getNextImages = () => {
    if(!this.cursor) return;

    this.getImages(this.cursor);
  };

  keyExtractor = ({ uri }) => uri;

  /**
   * 列表渲染函数
   */
  renderItem = ({ item: { uri }, size, marginTop, marginLeft }) => {
    const { onPressImage } = this.props;

    const style = {
      width: size,
      height: size,
      marginLeft,
      marginTop,
    };

    return (
      <TouchableOpacity
        key={uri}
        activeOpacity={0.75}
        onPress={() => onPressImage(uri)}
        style={style}
      > 
        <Image source={{ uri }} style={styles.image} />
      </TouchableOpacity>
    );
  };
  
  /**
   * 组件渲染
   */
  render() {
    const { images } = this.state;

    return (
      <Grid 
        data={images}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        onEndReached={this.getNextImages}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});