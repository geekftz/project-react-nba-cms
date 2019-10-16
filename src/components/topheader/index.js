import React, { Component } from 'react';

import { Layout, Menu, Dropdown, Icon, Button, Modal } from 'antd';

import { removeLocalStore } from '@/utils/common.js'

import { withRouter } from 'react-router-dom'

import './index.less'

const { Header } = Layout;

@withRouter
class TopHeader extends Component {
  state = {
    infoVisible: false,
    settingVisible: false
  }

  emitToggle() {
    this.props.toggle()
  }

  setInfoVisible(infoVisible) {
    this.setState({ infoVisible });
  }
  
  setSettingVisible(settingVisible) {
    this.setState({ settingVisible });
  }

  logout() {
    removeLocalStore(['usertoken'])
    this.props.history.push('/login')
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={() => {this.setInfoVisible(true)}}>
          个人信息
        </Menu.Item>
        <Menu.Item onClick={() => {this.setSettingVisible(true)}}>
          设置
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/geekftz/react-nba-cms/">
            github
          </a>
        </Menu.Item>
        <Menu.Item onClick={() => {this.logout()}}>
          退出登陆
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Header className="top-header">
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.emitToggle.bind(this)}
          />
          <Dropdown overlay={menu}>
            <Button type="link">
              admin<Icon type="user" />
            </Button>
          </Dropdown>
        </Header>

        <Modal
          title="个人信息"
          centered
          visible={this.state.infoVisible}
          okText="确认"
          cancelText="取消"
          onOk={() => this.setInfoVisible(false)}
          onCancel={() => this.setInfoVisible(false)}
          >
          <p>talk is cheap</p>
          <p>so i geekftz</p>
        </Modal>

        <Modal
          title="设置"
          centered
          visible={this.state.settingVisible}
          okText="确认"
          cancelText="取消"
          onOk={() => this.setSettingVisible(false)}
          onCancel={() => this.setSettingVisible(false)}
          >
          <p>主题切换</p>
        </Modal>
      </div>
    )
  }
}

export default TopHeader;