import React from 'react';

import { getECPM, mediaQueryMobile } from '../../utils/common';

import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: timestamp => <Tag color="green">{timestamp}</Tag>,
    sorter: (a, b) => {
      const d1 = new Date(a.timestamp);
      const d2 = new Date(b.timestamp);
      if (d1 > d2) {
        return -1;
      }
      if (d1 < d2) {
        return 1;
      }
      return 0;
    },
    fixed: mediaQueryMobile() ? 'left' : false
  },
  {
    title: 'Game',
    dataIndex: 'game',
    key: 'game',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
    sorter: (a, b) => a.revenue - b.revenue,
  },
  {
    title: 'Impressions',
    dataIndex: 'impressions',
    key: 'impressions',
    sorter: (a, b) => a.impressions - b.impressions,
  },
  {
    title: 'eCPM',
    dataIndex: 'eCPM',
    key: 'eCPM',
    sorter: (a, b) => a.eCPM - b.eCPM,
  },
];

const getDataSource = data => {
  const dataSource = (data || []).map((obj, index) => ({
    ...obj,
    key: `table_data_row_${index}`,
    eCPM: getECPM(obj.revenue, obj.impressions)
  }));

  dataSource.sort((a, b) => {
    const d1 = new Date(a.timestamp);
    const d2 = new Date(b.timestamp);
    if (d1 > d2) {
      return -1;
    }
    if (d1 < d2) {
      return 1;
    }
    return 0;
  });

  return dataSource;
};

export const ResultsTable = props => (
  <Table
    dataSource={getDataSource(props.data)}
    columns={columns}
    pagination={{
      showSizeChanger: true,
      pageSizeOptions: [5, 10],
      defaultPageSize: 5
    }}
    scroll={mediaQueryMobile() ? { x: 800 } : {}}
  />
);
