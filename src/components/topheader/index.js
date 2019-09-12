import React, { Component } from 'react';

import { Layout, Icon } from 'antd';
const { Header } = Layout;


class TopHeader extends Component {
  emitToggle() {
    this.props.toggle()
  }

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.emitToggle.bind(this)}
        />
      </Header>
    )
  }
}

export default TopHeader;