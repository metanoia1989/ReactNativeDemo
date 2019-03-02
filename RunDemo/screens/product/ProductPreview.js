import React, { Component } from 'react';
import { 
  Text, 
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import Swiper from 'react-native-swiper';
import HTML from 'react-native-render-html';

import Box from '../../components/form/Box';
import Item from '../../components/form/Item';

import { productPreviewData } from '../../utils/data';
import { texts } from '../../styles/components';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';
import InsertText from '../../components/product/InsertText';

const dateCustomerPicker = {
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
  dateText: {
    fontSize: sizes.FormFontSize,
  },
};

export default class ProductPreview extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '商品预览',
    // headerStyle: {
    //   backgroundColor: colors.primaryYellow,
    //   elevation: 0,
    // },
  });

  constructor(props) {
    super(props);
    this.state = {
      date: '2017-01-12',
    };
  }

  render() {
    const { product, prices, options } = productPreviewData;
    const picker = (
      <DatePicker
        customStyles={dateCustomerPicker}
        showIcon={false}
        date={this.state.date}
        mode='date'
        placeholder='请选择日期'
        format='YYYY-MM-DD'
        minDate='2015-01-01'
        maxDate='2019-01-01'
        confirmBtnText='确认'
        cancelBtnText='取消'
        onDateChange={date => this.setState({ date })}
      />
    );
    console.log('picker是什么', Boolean(picker));
    

    return (
      <ScrollView style={styles.container}>
        <Swiper 
          style={styles.swiper} 
          autoplay={true} 
          activeDotColor='#ff6600'
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.dotStyle}
        >
          {product.imgs.map((uri, index) => (
            <Image 
              style={styles.slide} 
              key={index} 
              source={{ uri }} 
              resizeMode='cover'
            />
          ))}
        </Swiper>
        <View style={styles.header}>
          <Text style={texts.text_lg}>{product.name}</Text>
          <Text style={[texts.gray_text, texts.text_df]}>
            销售价格: &nbsp;
            <Text style={texts.danger_text}>&yen;{product.price}</Text>
          </Text>
          <Text style={[texts.gray_text, texts.text_df]}>
            销售单位: &nbsp;{product.unit}
          </Text>
        </View>
        <Box style={styles.form}>
          <Item 
            title='选择规格' 
            content='颜色 尺码' 
            arrow={true}
            onPress={() => console.log('点击了选择规格')}
          />
          <Item 
            title='使用日期' 
            content='2019-03-02' 
            rightComponent={picker}
            arrow={true}
            last={true} 
            onPress={() => console.log('点击了使用日期')}
          />
        </Box>
        <InsertText text="商品详情" />
        <HTML html={product.description} imagesMaxWidth={Dimensions.get('window').width} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBgColor,
  },
  swiper: {
    height: 250,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    marginBottom: -10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: colors.bgWhite,
    padding: 20,
  },
  form: {
    marginTop: 10, 
    elevation: 0,
  },
  datePicker: {
  },
})

