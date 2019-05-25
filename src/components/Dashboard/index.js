import React from 'react';
import { connect } from 'react-redux';

import { ResultsTable } from '../ResultsTable';
import { TrendsChart } from '../TrendsChart';
import { DateRangePicker } from '../DateRangePicker';

import { Card } from 'antd';
import { Row, Col } from 'antd';

import './styles.css';

class Dashboard extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.fetchReducer;
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedRange: []
    };
  }
  onChange = (date, dateString) => {
    console.log(dateString);
    this.setState({
      selectedRange: dateString
    });
  }
  render() {
    const { isLoading, selectedRange } = this.state;
    let { data: renderData } = this.state;
    if (selectedRange.length === 2 && selectedRange[0].length && selectedRange[1].length) {
      renderData = (this.state.data || []).filter(obj => {
        const date = new Date(obj.timestamp);
        const rangeStart = new Date(selectedRange[0]);
        const rangeEnd = new Date(selectedRange[1]);

        return date > rangeStart && date < rangeEnd;
      });
    }

    return (
      <div>
        <Row>
          <div className="separator_bg" />
          <Col
            lg={{ span: 10, offset: 7 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <Card title="Select Date" loading={isLoading} className="card_base">
              <DateRangePicker onChange={this.onChange} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            lg={{ span: 16, offset: 4 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <Card title="eCPM Trends" loading={isLoading} className="card_base">
              {(renderData || []).length ? <TrendsChart data={renderData} /> : <span> No data kindly reset or change date range! </span>}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            lg={{ span: 20, offset: 2 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <Card title="Results" loading={isLoading} className="card_base">
              <ResultsTable data={renderData} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
}

function mapStateToProps(store) {
  return {
    fetchReducer: store.fetchReducer
  }
}

export default connect(mapStateToProps)(Dashboard);
