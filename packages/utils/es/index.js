/**
 *
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop() {
  return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
} // export  getScrollTop

/**
 *
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */
function getOffset(ele) {
  var pos = {
    left: 0,
    top: 0
  };
  var temp = ele;

  while (temp) {
    pos.left += temp.offsetLeft;
    pos.top += temp.offsetTop;
    temp = temp.offsetParent;
  }

  return pos;
}

/**
 *
 * @desc 设置滚动条距顶部的距离
 * @param {Number} value
 */
function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}

var requestAnimFrame = function () {
  return window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();
/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to
 * @param {Number} duration
 */


function setScrollTo(to, duration) {
  if (duration < 0) {
    setScrollTop(to);
    return;
  }

  var diff = to - getScrollTop();
  if (diff === 0) return;
  var step = diff / duration * 10;
  requestAnimFrame(function () {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff);
      return;
    }

    setScrollTop(getScrollTop() + step);

    if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
      return;
    }

    scrollTo(to, duration - 16);
  });
}

/**
 *
 * @desc H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {Function} upCb 当软键盘弹起的回调
 */
function windowResize(downCb, upCb) {
  var clientHeight = window.innerHeight;
  downCb = typeof downCb === 'function' ? downCb : function () {};
  upCb = typeof upCb === 'function' ? upCb : function () {};
  window.addEventListener('resize', function () {
    var height = window.innerHeight;

    if (height === clientHeight) {
      downCb();
    }

    if (height < clientHeight) {
      upCb();
    }
  });
}

/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @return {Any}
 */
function deepClone(values) {
  var copy; // Handle the 3 simple types, and null or undefined

  if (null == values || 'object' != typeof values) return values; // Handle Date

  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  } // Handle Array


  if (values instanceof Array) {
    copy = [];

    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }

    return copy;
  } // Handle Object


  if (values instanceof Object) {
    copy = {};

    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }

    return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}

/**
 *
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
}

/**
 *
 * @desc 随机生成颜色
 * @return {String}
 */
function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
 *
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @desc 判断是否为16进制颜色，rgb 或 rgba
 * @param  {String}  str
 * @return {Boolean}
 */
function isColor(str) {
  return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(str);
}

/**
 *
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
}

/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isPhoneNum(str) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str + '');
}

/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 *
 * @desc   现金额转大写
 * @param  {Number} n
 * @return {String}
 */
function digitUppercase(n) {
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';

  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }

  s = s || '整';
  n = Math.floor(n);

  for (var _i = 0; _i < unit[0].length && n > 0; _i++) {
    var p = '';

    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }

    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][_i] + s;
  }

  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
function formatPassTime(startTime) {
  var currentTime = Date.parse("" + new Date()),
      time = currentTime - startTime,
      day = parseInt((time / (1000 * 60 * 60 * 24)).toString()),
      hour = parseInt((time / (1000 * 60 * 60)).toString()),
      min = parseInt((time / (1000 * 60)).toString()),
      month = parseInt((day / 30).toString()),
      year = parseInt((month / 12).toString());
  if (year) return year + '年前';
  if (month) return month + '个月前';
  if (day) return day + '天前';
  if (hour) return hour + '小时前';
  if (min) return min + '分钟前';else return '刚刚';
}

/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
function formatRemainTime(endTime) {
  var startDate = new Date(); //开始时间

  var endDate = new Date(endTime); //结束时间

  var t = endDate.getTime() - startDate.getTime(); //时间差

  var d = 0,
      h = 0,
      m = 0,
      s = 0;

  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }

  return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒';
}

/**
 *
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */
function isLeapYear(year) {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }

  return false;
}

/**
 * @desc   判断是否为同一天
 * @param  {Date} date1
 * @param  {Date} date2 可选／默认值：当天
 * @return {Boolean}
 */
function isSameDay(date1, date2) {
  if (!date2) {
    date2 = new Date();
  }

  var date1_year = date1.getFullYear(),
      date1_month = date1.getMonth() + 1,
      date1_date = date1.getDate();
  var date2_year = date2.getFullYear(),
      date2_month = date2.getMonth() + 1,
      date2_date = date2.getDate();
  return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
}

/**
 * @desc 获取指定日期月份的总天数
 * @param {Date} time
 * @return {Number}
 */
function getMonthDays(time) {
  time = new Date(time);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}

/**
 * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
function getTimeLeft(startTime, endTime) {
  if (!startTime || !endTime) {
    return;
  }

  var startDate, endDate;

  if (startTime instanceof Date) {
    startDate = startTime;
  } else {
    startDate = new Date(startTime.replace(/-/g, '/')); //开始时间
  }

  if (endTime instanceof Date) {
    endDate = endTime;
  } else {
    endDate = new Date(endTime.replace(/-/g, '/')); //结束时间
  }

  var t = endDate.getTime() - startDate.getTime();
  var d = 0,
      h = 0,
      m = 0,
      s = 0;

  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }

  return {
    d: d,
    h: h,
    m: m,
    s: s
  };
}

/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
function parseQueryString(url) {
  url = !url ? window.location.href : url;

  if (url.indexOf('?') === -1) {
    return {};
  }

  var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);

  if (search === '') {
    return {};
  }

  search = search.split('&');
  var query = {};

  for (var i = 0; i < search.length; i++) {
    var pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query;
}

/**
 *
 * @desc   对象序列化
 * @param  {Object} obj
 * @return {String}
 */
function stringfyQueryString(obj) {
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }

      continue;
    }

    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
}

export { deepClone, digitUppercase, formatPassTime, formatRemainTime, getMonthDays, getOffset, getScrollTop, getTimeLeft, isColor, isEmail, isEmptyObject, isIdCard, isLeapYear, isPhoneNum, isSameDay, isUrl, parseQueryString, randomColor, randomNum, setScrollTo, setScrollTop, stringfyQueryString, windowResize };
