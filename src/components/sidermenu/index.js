import React, { Component } from "react";

import { withRouter } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

@withRouter
class SiderMenu extends Component {
  handleClick(item) {
    this.props.history.push('/app/' + item.keyPath.reverse().join('/'))
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu
          defaultOpenKeys={['nba']}
          defaultSelectedKeys={['team']}
          mode="inline"
          theme="dark"
          onClick={(item) => this.handleClick(item)}
        >
          <SubMenu
            key="nba"
            title={
              <span>
                <Icon type="dribbble" />
                <span>NBA</span>
              </span>
            }
          >
            <Menu.Item key="team">Team</Menu.Item>
            <Menu.Item key="player">Player</Menu.Item>
          </SubMenu>
          <SubMenu
            key="history"
            title={
              <span>
                <Icon type="dribbble" />
                <span>History</span>
              </span>
            }
          >
            <Menu.Item key="allstar">ALL STAR</Menu.Item>
            <Menu.Item key="halloffame">Hall of Fame</Menu.Item>
          </SubMenu>
          <SubMenu
            key="equipment"
            title={
              <span>
                <Icon type="dribbble" />
                <span>Equipment</span>
              </span>
            }
          >
            <Menu.Item key="shoes">Shoes</Menu.Item>
            <Menu.Item key="uniforms">Uniforms</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu