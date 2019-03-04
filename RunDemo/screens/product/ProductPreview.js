import React, { Component } from 'react';
import { 
  Text, 
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {  Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import Swiper from 'react-native-swiper';
import HTML from 'react-native-render-html';

import Box from '../../components/form/Box';
import Item from '../../components/form/Item';
import DashLine from '../../components/common/DashLine';
import InsertText from '../../components/product/InsertText';

import { productPreviewData } from '../../utils/data';
import { diffObject, getCurrentDate } from '../../utils/tools'
import { texts } from '../../styles/components';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

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

    const { 
      image, 
      quantity, 
      min_price, 
      max_price,
    } = productPreviewData.product;

    const options_combination = productPreviewData.options.map((item => item.option_name)).join(' '); 


    this.state = {
      date: getCurrentDate(),
      showModal: false,
      options_combination, 
      // 展示的规格数据
      selectShow: {
        image,
        quantity,
        price: `${min_price} - ${max_price}` 
      },
      // 选择的规格
      selectOption: {},
      // 选择的规格名
      selectNames: {},
    };

  }

  handleChoosePrice = () => {
    this.setState({
      showModal: false,
    });
  };

  handlePressSize = (option_id, item) => {
    console.log('参数', option_id, item);

    const { option_value_id, option_value_name } = item;
    const { options, prices, product } = productPreviewData;

    this.setState(prevState => ({
      selectOption: {
        ...prevState.selectOption,
        [option_id]: option_value_id,
      },
      selectNames: {
        ...prevState.selectNames,
        [option_id]: option_value_name,
      },
      options_combination: '',
    }), () => {
      console.log('选择的子项', this.state.selectOption);
      const { selectOption, selectNames } = this.state;

      if(options.length != Object.keys(selectOption).length) return;

      const value = prices.find( item => diffObject(item.combination, selectOption));

      if(value){
        if(!value.img) value.img = product.image;
        const { price, quantity, img: image  } = value; 
        this.setState({
          selectShow: { price, quantity, image },
          options_combination: Object.values(selectNames).join(' '),
        });
        console.log('最终展示的值', price, quantity, image);
      }

    });
  };

  render() {
    const { product, options } = productPreviewData;
    const { 
      showModal, 
      selectShow, 
      selectOption, 
      selectNames, 
      options_combination, 
      date,
    } = this.state;

    const picker = (
      <DatePicker
        customStyles={dateCustomerPicker}
        showIcon={false}
        date={date}
        mode='date'
        placeholder='请选择日期'
        format='YYYY-MM-DD'
        confirmBtnText='确认'
        cancelBtnText='取消'
        onDateChange={date => this.setState({ date })}
      />
    );
    

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
            content={options_combination} 
            arrow={true}
            onPress={() => this.setState({ showModal: true })}
          />
          <Item 
            title='使用日期' 
            content={date} 
            rightComponent={picker}
            arrow={true}
            last={true} 
            onPress={() => console.log('点击了使用日期')}
          />
        </Box>
        <Modal 
          isVisible={showModal} 
          style={styles.modal}
          onBackdropPress={() => this.setState({ showModal: false })}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Image style={styles.modalImage} source={{ uri: selectShow.image }} />
              <View>
                <Text style={texts.text_df}>
                  价格: <Text style={texts.danger_text}>&yen; {selectShow.price}</Text>
                </Text>
                <Text style={texts.text_df}>库存: {selectShow.quantity}{product.unit}</Text>
                <Text style={texts.text_df}>
                  已选: {Object.values(selectNames).map((name, index)=> (
                    <Text style={texts.primary_text} key={index}>{name}&nbsp;</Text>
                  ))}
                </Text>
              </View>
            </View>
            <DashLine />
            <View style={styles.modalOptions}>
              {options.map((option, index) => (
                <View key={`option-${index}`}>
                  <Text style={texts.text_lg}>{option.option_name}</Text> 
                  <View style={styles.sizeBox}>
                    {option.child.map((item, index) => {
                      const active = selectOption[option.option_id] == item.option_value_id;
                      return (
                        <Text 
                          key={`option-value-${index}`}
                          onPress={() => this.handlePressSize(option.option_id, item)}
                          style={[texts.text_df, styles.sizeItem, active && styles.activeSizeItem]}
                        >
                          {item.option_value_name}
                        </Text>
                      );
                    })}
                  </View>
                </View>
              ))}
            </View>
            <DashLine />
            <View style={styles.modalFooter}>
              <Button mode="contained" 
                compact={true}
                dark={true}
                color={colors.orange}  
                contentStyle={styles.confirmText}
                style={styles.confirmBtn}
                onPress={this.handleChoosePrice}
              >
                确认选择
              </Button>
            </View>
          </View>
        </Modal>
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
  header: {
    backgroundColor: colors.bgWhite,
    padding: 20,
  },
  form: {
    marginTop: 10, 
    elevation: 0,
  },
  // 选项规格
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: colors.bgWhite,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 20,
  },
  modalOptions: {
    margin: 20,
  },
  modalFooter: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  modalImage: {
    width: 130,
    height: 130,
    marginRight: 20,
  },
  confirmBtn: {
  },
  confirmText: {
    fontSize: 20,
    fontWeight: '800',
  },
  sizeBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
    flexWrap: 'wrap',
  },
  sizeItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 4,
    borderRadius: 4,
    backgroundColor: colors.borderColor,
    color: '#666',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  activeSizeItem: {
    borderColor: colors.orange,
    color: colors.orange,
    backgroundColor: 'rgba(238, 238, 238, .4)',
  },
})

