import React from 'react';
import Dashboard from './components/Dashboard';

import 'antd/dist/antd.css';
import { notification } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('offline', this.onOffline);
  }
  componentWillUnmount() {
    window.removeEventListener('offline', this.onOffline);
  }
  onOffline = () => {
    notification['error']({
      message: 'No Internet',
      description:
        'It seems like your internet is either to slow or disconnected. Kindly refresh!',
      duration: 0
    });
  }
  render() {
    return <Dashboard />;
  }
}

export default App;
