import React from "react";
import { Layout } from 'antd';

import SiderMenu from '@/components/sidermenu'
import TopHeader from '@/components/topheader'

import Routes from '@/routes'
import './App.less'
import '@/styles/base.less'

import { getLocalStore } from '@/utils/common.js'


const { Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    let { usertoken } = getLocalStore(['usertoken'])
    
    if (!usertoken) {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div className="app">
        <Layout>
          <SiderMenu collapsed={this.state.collapsed} />

          <Layout>
            <TopHeader collapsed={this.state.collapsed} toggle={this.toggle} />

            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
            <Routes />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App