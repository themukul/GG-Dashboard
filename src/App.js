import React from 'react';
import Dashboard from './components/Dashboard';

import 'antd/dist/antd.css';
import { notification } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);

    // handle offline event
    window.addEventListener('offline', this.onOffline);
  }
  componentWillUnmount() {
    // detach offline event handler
    window.removeEventListener('offline', this.onOffline);
  }
  onOffline = () => {
    notification['error']({
      message: 'No Internet',
      description:
        'It seems like your internet is either too slow or disconnected. Kindly refresh!',
      duration: 0
    });
  }
  render() {
    return <Dashboard />;
  }
}

export default App;
