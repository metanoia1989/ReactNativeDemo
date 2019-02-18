import React, { Component } from 'react';
import { ColorPropType } from 'react-native';
import PropTypes from 'prop-types';
import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';

const glyphMap = { 'icon-name': 1234, test: '∆' };
const ColorUiIcon = createIconSet(glyphMap, 'ColorUiIcon');

export default class Icon extends Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: ColorPropType.isRequired,
  };
 
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }


  async componentDidMount() {
    await Font.loadAsync({
      'ColorUiIcon': require('../assets/fonts/colorui-font.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) return; 

    const { name, size, color } = this.props;

    return (
      <ColorUiIcon name={name} size={size} color={color} />
    );
  }
}




