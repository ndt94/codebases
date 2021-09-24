'use es6';

import getDateNumberFormattingLocale from './getDateNumberFormattingLocale';
import getMomentToDateValue from './internal/getMomentToDateValue';
export default (function (value, type) {
  var dateValue = getMomentToDateValue(value, type);
  var dateFormatter = new Intl.DateTimeFormat(getDateNumberFormattingLocale(), {
    month: 'short',
    day: 'numeric'
  });
  return dateFormatter.format(dateValue);
});