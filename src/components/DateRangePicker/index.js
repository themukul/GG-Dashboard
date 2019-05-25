import React from 'react';

import moment from 'moment';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const disabledDate = current => {
  // Can not select days before today and today
  return current && current > moment().endOf('day');
}

export const DateRangePicker = ({ onChange }) => <RangePicker onChange={onChange} allowClear disabledDate={disabledDate} />;
