/*
 * @Description: 项目虚拟数据
 * @Author: Smith Adam
 * @Email: sogaxili@gmail.com
 * @LastEditors: Smith Adam
 * @Date: 2019-02-20 09:33:59
 * @LastEditTime: 2019-02-21 18:29:54
 */


/** 
 * 首页数据
 */
const homeData = {
  orders: [
    {
      order_id: '14405234234234',
      date_added: '2019-11-24',
      status_en: 'success',
      status_name: '已完成',
      store_name: '裤架之家',
      customer_email: 'sogaxili@gmail.com',
      total: 4500,
      return_status_name: '已处理',
      shopping_name: '大河',
      shopping_mobile: '14055449988',
      shopping_address: '广州市天河区聚聚地',
    },
    {
      order_id: '14405234234234',
      date_added: '2019-11-24',
      status_en: 'success',
      status_name: '已完成',
      store_name: '裤架之家',
      customer_email: 'sogaxili@gmail.com',
      total: 4500,
      return_status_name: '已处理',
      shopping_name: '大河',
      shopping_mobile: '14055449988',
      shopping_address: '广州市天河区聚聚地',
    },
    {
      order_id: '14405234234234',
      date_added: '2019-11-24',
      status_en: 'no',
      status_name: '已完成',
      store_name: '裤架之家',
      customer_email: 'sogaxili@gmail.com',
      total: 4500,
      return_status_name: '已处理',
      shopping_name: '大河',
      shopping_mobile: '14055449988',
      shopping_address: '广州市天河区聚聚地',
    },
  ],
  refunds: [
    {
      order_id: '14123423423423',
      date_ordered: '2011-11-24',
      status_en: 'wraning',
      return_status_name: '同意退款',
      return_id: 14,
      current_name: '张大千',
      return_amount: 1400,
      shipping_name: '石狮子',
      shipping_mobile: '14299880605',
      shipping_address: '武汉市光伏区',
    },
    {
      order_id: '14123423423423',
      date_ordered: '2011-11-24',
      status_en: 'wraning',
      return_status_name: '同意退款',
      return_id: 14,
      current_name: '张大千',
      return_amount: 1400,
      shipping_name: '石狮子',
      shipping_mobile: '14299880605',
      shipping_address: '武汉市光伏区',
    },
    {
      order_id: '14123423423423',
      date_ordered: '2011-11-24',
      status_en: 'wraning',
      return_status_name: '同意退款',
      return_id: 14,
      current_name: '张大千',
      return_amount: 1400,
      shipping_name: '石狮子',
      shipping_mobile: '14299880605',
      shipping_address: '武汉市光伏区',
    },
  ],
};


/**
 * 商品页数据
 */
const productData = [
  {
    product_id: 56803,
    image: "https://picsum.photos/400/400?image=0",
    product_name: "防静电基督教的",
    model: "",
    sku: "DHC-2593-56803",
    unit: "",
    quantity: 1,
    status: 1,
    approved: 0,
    product_type_name: "实体商品（保证7天无理由退款）",
    product_type_en: "common",
    activity_name: "",
    join_activity: "",
    activity_status: ""
  },
  {
    product_id: 56802,
    image: "https://picsum.photos/400/400?image=1",
    product_name: "反复的",
    model: "",
    sku: "DHC-2593-56802",
    unit: "",
    quantity: 1,
    status: 1,
    approved: 0,
    product_type_name: "服务类商品",
    product_type_en: "service",
    activity_name: "",
    join_activity: "",
    activity_status: ""
  },
  {
    product_id: 56801,
    image: "https://picsum.photos/400/400?image=2",
    product_name: "十全优惠券",
    model: "aadasdf",
    sku: "DHC-2593-56801",
    unit: "公斤",
    quantity: 116,
    status: 0,
    approved: 0,
    product_type_name: "服务类商品",
    product_type_en: "service",
    activity_name: "",
    join_activity: "",
    activity_status: ""
  },
  {
    product_id: 56800,
    image: "http://www.a.com/image/",
    product_name: "11大家121一1111起发财啦",
    model: "",
    sku: "DHC-2593-56800",
    unit: "",
    quantity: 1,
    status: 1,
    approved: 1,
    product_type_name: "服务类商品",
    product_type_en: "service",
    activity_name: "销售活动",
    join_activity: 1,
    activity_status: 0
  },
  {
    product_id: 56799,
    image: "https://picsum.photos/400/400?image=3",
    product_name: "绝对大求生 优惠券",
    model: "a0055",
    sku: "DHC-352-56799",
    unit: "公斤",
    quantity: 2468,
    status: 1,
    approved: 1,
    product_type_name: "服务类商品",
    product_type_en: "service",
    activity_name: "",
    join_activity: "",
    activity_status: ""
  },
  {
    product_id: 56798,
    image: "https://picsum.photos/400/400?image=4",
    product_name: "十全优惠券",
    model: "aadasdf",
    sku: "DHC-2593-56798",
    unit: "公斤",
    quantity: 11,
    status: 1,
    approved: 0,
    product_type_name: "服务类商品",
    product_type_en: "service",
    activity_name: "",
    join_activity: "",
    activity_status: ""
  },
  {
    product_id: 56797,
    image: "https://picsum.photos/400/400?image=5",
    product_name: "十全优惠券",
    model: "aadasdf",
    sku: "DHC-2593-56797",
    unit: "公斤",
    quantity: 121,
    status: 1,
    approved: 0,
    product_type_name: "服务类商品",
    product_type_en: "service",
    activity_name: "",
    join_activity: "",
    activity_status: ""
  },
  {
    product_id: 56796,
    image: "https://picsum.photos/400/400?image=6",
    product_name: "",
    model: "aadasdf",
    sku: "",
    unit: "公斤",
    quantity: 11,
    status: 1,
    approved: 0,
    product_type_name: "服务类商品",
    product_type_en: "service",
    activity_name: "",
    join_activity: "",
    activity_status: ""
  }  
];

/**
 * 店铺列表数据
 */
const shopData = [
  {
    "introduce_id": "77",
    "name": "富裕支架",
    "introduce_image": "https://picsum.photos/400/400?image=7",
    "description": "",
    "sort_order": "0",
    "customer_id": "2593",
    "category_id": "1391",
    "per_capita": "0.00",
    "zone_id": "693",
    "city_id": "0",
    "area_id": "0",
    "map_id": "3",
    "shop_introduce_id": "77",
    "title": "广州市番禺区委(番禺大道北西)",
    "address": "广东省广州市番禺区清河东路319号",
    "phone": "13593871052",
    "image": "https://picsum.photos/400/400?image=8",
    "content": "富裕支架",
    "lng": "22.944013519219",
    "lat": "113.39026663102"
  },
  {
    "introduce_id": "80",
    "name": "测试添加哈哈哈13",
    "introduce_image": "https://picsum.photos/400/400?image=9",
    "description": "",
    "sort_order": "8",
    "customer_id": "2593",
    "category_id": "1391",
    "per_capita": "0.00",
    "zone_id": "693",
    "city_id": "5",
    "area_id": "37",
    "map_id": "6",
    "shop_introduce_id": "80",
    "title": "广州市番禺区委(番禺大道北西)",
    "address": "广东省广州市番禺区清河东路319号",
    "phone": "12341234",
    "image": "https://picsum.photos/400/400?image=10",
    "content": "测试添加哈哈哈",
    "lng": "22.944013519219",
    "lat": "113.39026663102"
  },
  {
    "introduce_id": "83",
    "name": "1高雄发大财1，就是赞啦",
    "introduce_image": "https://picsum.photos/400/400?image=11",
    "description": "",
    "sort_order": "110",
    "customer_id": "2593",
    "category_id": "1420",
    "per_capita": "55.22",
    "zone_id": "693",
    "city_id": "5",
    "area_id": "39",
    "map_id": "8",
    "shop_introduce_id": "83",
    "title": "广州市番禺区委(番禺大道北西)11",
    "address": "广东省广州市番禺区清河东路319号",
    "phone": "545454545454",
    "image": "https://picsum.photos/400/400?image=12",
    "content": "##高雄发大财，就是赞啦##",
    "lng": "113.39070817082",
    "lat": "22.943957238074"
  },
  {
    "introduce_id": "92",
    "name": "恭喜發財1234",
    "introduce_image": "https://picsum.photos/400/400?image=13",
    "description": "",
    "sort_order": "10",
    "customer_id": "2593",
    "category_id": "1392",
    "per_capita": "400.00",
    "zone_id": "693",
    "city_id": "6",
    "area_id": "62",
    "map_id": "17",
    "shop_introduce_id": "92",
    "title": "番禺区沙头雅居乐·邻里时光(光明北路西)",
    "address": "广东省广州市番禺区光明北路281号",
    "phone": "155464885859",
    "image": "https://picsum.photos/400/400?image=14",
    "content": "恭喜發財",
    "lng": "22.958259438499",
    "lat": "113.36728130622"
  }  
];

/**
 * 用户中心个人信息
 */
const userinfo = {
  "company": "努力挣钱12112",
  "qq": "",
  "mobile": "13593871052",
  "city": "Guangzhou",
  "headimgurl": "https://wx.qlogo.cn/mmopen/vi_32/1uicRfUe5tvOHfjqmwY9zA2mRTxgWOrUNSuKdx1bhGYzO9dRl3zIbfPF5IQfiaoUgbToSYVkT06dqibQPCPOIBDZw/132",
};

/**
 * 销售统计数据
 */
const financeData = {
  "counts": {
    "all_order_count": "361",
    "all_order_total": "￥45,485.02",
    "all_member_total": "￥4,049.32",
    "all_payad_total": "￥2.30",
    "all_service_total": "￥1,363.64",
    "all_supplier_total": "￥40,069.76",
    "all_products_total": "￥45,442.52",
    "all_shipping_total": "42.50",
    "all_shipping_commission": "0.00",
    "currency_code": "CNY",
    "currency_value": "1.00000000"
  },
  "orders": [
    {
      "order_id": "201812031020892",
      "store_name": "测试服务社",
      "firstname": "前无古人",
      "lastname": "",
      "username": "a601552348",
      "email": "",
      "mobile": "",
      "nickname": null,
      "total": "￥2,953.00",
      "currency_code": "CNY",
      "currency_value": "1.00000000",
      "member_total": "￥93.69",
      "payad_total": "￥0.00",
      "service_total": "￥88.59",
      "shipping_commission": "0.00",
      "supplier_total": "￥2,770.72",
      "shipping_total": "0.00",
      "products_total": "￥2,953.00",
      "current_name": "前无古人"
    },
    {
      "order_id": "201812031008278",
      "store_name": "测试服务社",
      "firstname": "前无古人",
      "lastname": "",
      "username": "a601552348",
      "email": "",
      "mobile": "",
      "nickname": null,
      "total": "￥11,919.00",
      "currency_code": "CNY",
      "currency_value": "1.00000000",
      "member_total": "￥1,172.37",
      "payad_total": "￥0.00",
      "service_total": "￥357.57",
      "shipping_commission": "0.00",
      "supplier_total": "￥10,389.06",
      "shipping_total": "0.00",
      "products_total": "￥11,919.00",
      "current_name": "前无古人"
    },
    {
      "order_id": "201811300555263",
      "store_name": "测试服务社",
      "firstname": "前无古人",
      "lastname": "",
      "username": "a601552348",
      "email": "",
      "mobile": "",
      "nickname": null,
      "total": "￥3,880.00",
      "currency_code": "CNY",
      "currency_value": "1.00000000",
      "member_total": "￥388.00",
      "payad_total": "￥0.00",
      "service_total": "￥116.40",
      "shipping_commission": "0.00",
      "supplier_total": "￥3,375.60",
      "shipping_total": "0.00",
      "products_total": "￥3,880.00",
      "current_name": "前无古人"
    },
    {
      "order_id": "201811200850505",
      "store_name": "萧萧雨桐",
      "firstname": "远方",
      "lastname": "",
      "username": "wx_195879",
      "email": "",
      "mobile": null,
      "nickname": null,
      "total": "￥36.00",
      "currency_code": "CNY",
      "currency_value": "1.00000000",
      "member_total": "￥3.92",
      "payad_total": "￥0.00",
      "service_total": "￥1.08",
      "shipping_commission": "0.00",
      "supplier_total": "￥31.00",
      "shipping_total": "0.00",
      "products_total": "￥36.00",
      "current_name": "远方"
    },
    {
      "order_id": "201811200845920",
      "store_name": "萧萧雨桐",
      "firstname": "远方",
      "lastname": "",
      "username": "wx_195879",
      "email": "",
      "mobile": null,
      "nickname": null,
      "total": "￥39.00",
      "currency_code": "CNY",
      "currency_value": "1.00000000",
      "member_total": "￥6.83",
      "payad_total": "￥0.00",
      "service_total": "￥1.17",
      "shipping_commission": "0.00",
      "supplier_total": "￥31.00",
      "shipping_total": "0.00",
      "products_total": "￥39.00",
      "current_name": "远方"
    },
    {
      "order_id": "201811120614750",
      "store_name": "春与青溪",
      "firstname": "A青青河边草",
      "lastname": "",
      "username": "wx_193269",
      "email": "",
      "mobile": null,
      "nickname": "A青青河边草",
      "total": "￥103.00",
      "currency_code": "CNY",
      "currency_value": "1.00000000",
      "member_total": "￥11.33",
      "payad_total": "￥0.00",
      "service_total": "￥3.09",
      "shipping_commission": "0.00",
      "supplier_total": "￥88.58",
      "shipping_total": "0.00",
      "products_total": "￥103.00",
      "current_name": "A青青河边草"
    },
    {
      "order_id": "201811111182073",
      "store_name": "萧萧雨桐",
      "firstname": "目意",
      "lastname": "",
      "username": "wx_916360",
      "email": "",
      "mobile": null,
      "nickname": "目意",
      "total": "￥50.00",
      "currency_code": "CNY",
      "currency_value": "1.00000000",
      "member_total": "￥3.50",
      "payad_total": "￥0.00",
      "service_total": "￥1.50",
      "shipping_commission": "0.00",
      "supplier_total": "￥45.00",
      "shipping_total": "0.00",
      "products_total": "￥50.00",
      "current_name": "目意"
    },
  ],
};

/**
 *  运费列表数据
 */
const freightData = [
  {
    "fare_id": "141",
    "name": "广西南宁火龙果",
    "province": "广西壮族",
    "city": "南宁市",
    "delivery_time": "3天内",
    "is_shipping": "是",
    "valuation": "件数",
    "freight": "快递",
    "special": "否"
  },
  {
    "fare_id": "405",
    "name": "测试模板",
    "province": "北京市",
    "city": "市辖区",
    "delivery_time": "4小时内",
    "is_shipping": "否",
    "valuation": "件数",
    "freight": "快递",
    "special": "是"
  },
  {
    "fare_id": "406",
    "name": "邮费优惠模板",
    "province": "北京市",
    "city": "",
    "delivery_time": "2天内",
    "is_shipping": "否",
    "valuation": "重量",
    "freight": "快递",
    "special": "是"
  },
  {
    "fare_id": "407",
    "name": "省钱大包邮",
    "province": "辽宁省",
    "city": "沈阳市",
    "delivery_time": "10天内",
    "is_shipping": "否",
    "valuation": "件数",
    "freight": "快递,EMS",
    "special": "是"
  },
  {
    "fare_id": "408",
    "name": "手機模板",
    "province": "黑龙江省",
    "city": "",
    "delivery_time": "12小时内",
    "is_shipping": "否",
    "valuation": "件数",
    "freight": "快递",
    "special": "是"
  }
];

/**
 * 商品价格数据
 */
const productPricesData = {
  name: "浪莎男士女士加绒加厚不倒绒暖绒保暖内衣套装",
  prices: [
      {
        "price": "11.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "浅麻灰",
          "尺码": "l"
        }
      },
      {
        "price": "13.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "浅麻灰",
          "尺码": "xl"
        }
      },
      {
        "price": "55.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "浅麻灰",
          "尺码": "xxl"
        }
      },
      {
        "price": "255.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "浅麻灰",
          "尺码": "xxxl"
        }
      },
      {
        "price": "444.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "藏青",
          "尺码": "l"
        }
      },
      {
        "price": "23.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "藏青",
          "尺码": "xl"
        }
      },
      {
        "price": "315.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "藏青",
          "尺码": "xxl"
        }
      },
      {
        "price": "425.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "藏青",
          "尺码": "xxxl"
        }
      },
      {
        "price": "67.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "深灰色",
          "尺码": "l"
        }
      },
      {
        "price": "99.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "深灰色",
          "尺码": "xl"
        }
      },
      {
        "price": "33.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "深灰色",
          "尺码": "xxl"
        }
      },
      {
        "price": "552.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "深灰色",
          "尺码": "xxxl"
        }
      },
      {
        "price": "462.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士黑色",
          "尺码": "l"
        }
      },
      {
        "price": "325.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士黑色",
          "尺码": "xl"
        }
      },
      {
        "price": "2452435.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士黑色",
          "尺码": "xxl"
        }
      },
      {
        "price": "3467.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士黑色",
          "尺码": "xxxl"
        }
      },
      {
        "price": "872.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士红色",
          "尺码": "l"
        }
      },
      {
        "price": "209.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士红色",
          "尺码": "xl"
        }
      },
      {
        "price": "532.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士红色",
          "尺码": "xxl"
        }
      },
      {
        "price": "273.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士红色",
          "尺码": "xxxl"
        }
      },
      {
        "price": "723.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士紫色",
          "尺码": "l"
        }
      },
      {
        "price": "3778.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士紫色",
          "尺码": "xl"
        }
      },
      {
        "price": "23676.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士紫色",
          "尺码": "xxl"
        }
      },
      {
        "price": "36224.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "女士紫色",
          "尺码": "xxxl"
        }
      },
      {
        "price": "362.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "男士大红",
          "尺码": "l"
        }
      },
      {
        "price": "232.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "男士大红",
          "尺码": "xl"
        }
      },
      {
        "price": "2321.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "男士大红",
          "尺码": "xxl"
        }
      },
      {
        "price": "121.00",
        "service_price": "2.55",
        "supplier_price": "75.00",
        "commission": "7.45",
        "commission_rate": "8.76",
        "combination": {
          "颜色": "男士大红",
          "尺码": "xxxl"
        }
      }
  ],
};

export {
  homeData,
  productData,
  shopData,
  userinfo,
  financeData,
  freightData,
  productPricesData,
}