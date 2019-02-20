/*
 * @Description: js 工具函数
 * @Author: Smith Adam
 * @Email: sogaxili@gmail.com
 * @LastEditors: Smith Adam
 * @Date: 2019-02-19 09:51:52
 * @LastEditTime: 2019-02-20 10:44:46
 */


/**
 * js 数组等分
 * 
 * @param {array} data  要分割的数组
 * @param {number} num 分割成几份
 */
function splitArr(data, num = 3)
{
  if(!isArray(data) && !isInteger(num))
    throw TypeError("分割的数据必须为数组，分割几份必须为整数");
  
  if(data.length < num) 
    return array(data);

  let result = [];
  for (let i = 0, len = data.length; i < len; i += 3) {
    result.push(data.slice(i, i+3));
  }
  return result;
}


/**
 * 格式化日期对象
 * @param {object} date 
 */
function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate()
  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;
  return `${year}-${month}-${day}`;
}

/**
 * 获取今日日期
 */
function getCurrentDate() {
  let now = new Date();
  return formatDate(now)
}

/** 
 * 获取本周的开始日期
 */
function getWeekStartDate() {
  let now = new Date();
  let year = now.getYear();
  year += (year < 2000) ? 1900 : 0;
  let month = now.getMonth();
  let day = now.getDate();
  let weekOfDay = now.getDay();


  let weekStartDate = new Date(year, month, day - weekOfDay);
  return formatDate(weekStartDate);
}

/** 
 * 获取本周的结束日期
 */
function getWeekEndDate() {
  let now = new Date();
  let year = now.getYear();
  year += (year < 2000) ? 1900 : 0;
  let month = now.getMonth();
  let day = now.getDate();
  let weekOfDay = now.getDay();
  let weekEndDate = new Date(year, month, day + (6 - weekOfDay));
  return formatDate(weekEndDate);
}

/** 
 * 获取本月的开始日期
 */
function getMonthStartDate() {
  let now = new Date();
  let year = now.getYear();
  year += (year < 2000) ? 1900 : 0;
  let month = now.getMonth();
  let MonthStartDate = new Date(year, month, 1);
  return formatDate(MonthStartDate);
}

/** 
 * 获取本月的结束日期
 */
function getMonthEndDate() {
  let now = new Date();
  let year = now.getYear();
  year += (year < 2000) ? 1900 : 0;
  let month = now.getMonth();
  // 获取一个月的天数
  let monthStartDate = new Date(year, month, 1);
  let monthEndDate = new Date(year, month + 1, 1);
  let days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
  let MonthEndDate = new Date(year, month, days);
  return formatDate(MonthEndDate);
}


/**
 * 比较两个js类型的对象
 */
function diffObject(a, b) {
  if(!isObject(a) || !isObject(b)) {
    throw new TypeError(' a or b is invalid json' )
  }

  let keys = Object.keys(a)

  if (keys.length == 0) {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  let aValue, bValue, key

  for (key of keys) {
    aValue = a[key]
    bValue = b[key]
    if (isObject(aValue) && isObject(bValue) === 'object') {
      return diff(aValue, bValue)
    } else if (aValue !== bValue) {
      return false
    }
  }
  return true
}

/**
 *  判断是否是对象
 */
function isObject(v) {
  return Object.prototype.toString.call(v) === "[object Object]" && !!v
}

/**
 *  判断是否是数组
 */
function isArray(v) {
  return Object.prototype.toString.call(v) === "[object Array]" && !!v
}

/**
 *  判断是否是整数
 */
function isInteger(v) {
  return Math.round(v)  === v; 
}

/**
 *  判断是否是函数
 */
function isFunction(v) {
  return Object.prototype.toString.call(v) === "[object Function]" && !!v
}


export {
  getCurrentDate,
  getMonthStartDate,
  getMonthEndDate,
  getWeekStartDate,
  getWeekEndDate,
  diffObject,
  isArray,
  isFunction,
  isInteger,
  isObject,
  splitArr,
};