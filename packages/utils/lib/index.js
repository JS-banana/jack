'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.formatPassTime = formatPassTime;
exports.formatRemainTime = formatRemainTime;
