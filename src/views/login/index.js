import React from "react";
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

// import { requestLogin } from '@/api/login'

import './index.less'

import { setLocalStore, getLocalStore, removeLocalStore } from '@/utils/common.js'

class NormalLoginForm extends React.Component {
  componentDidMount() {
    let { username, password, usertoken } = getLocalStore(['username', 'password', 'usertoken'])

    if (username && password) {
      this.props.form.setFieldsValue({ username, password });
    }
    
    this.props.history.push(`${usertoken? '/app/nba/team' : '/login'}`)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password, remember } = values

        if (username === 'admin' && password === '123456') {
            if (remember) {
              setLocalStore(['username', 'password', 'usertoken'], [username, password, 'auth-token'])
            } else {
              setLocalStore(['usertoken'], ['auth-token'])
              removeLocalStore(['username', 'password'])
            }

            message.success('登陆成功')
            
            this.props.history.push('/app/nba/team');
          } else {
            message.error('登陆失败')
        }

        // let data = {
        //   username,
        //   password
        // }

        // requestLogin(data).then(res => {
          
        //   let { retCode, userToken } = res
        //   setLocalStore(['userToken'], [userToken])

        //   if (retCode === 0) {
        //     if (remember) {
        //       setLocalStore(['username', 'password'], [username, password])
        //     } else {
        //       removeLocalStore(['username', 'password'])
        //     }

        //     this.props.history.push('/app');
        //   }
        // })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                autoComplete="off"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                autoComplete="new-password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox className="login-form-remember">Remember me</Checkbox>)}
            <a className="login-form-forgot" href="/login">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/login">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );

    
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login