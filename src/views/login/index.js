import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { requestLogin } from '@/api/login'


import './index.less'

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password, remember } = values

        let data = {
          username,
          password
        }

        requestLogin(data).then(res => {
          console.log(res);

          console.log('master fetch test');
          
          let { retCode, userToken } = res
          localStorage.setItem('userToken', userToken)

          if (retCode === 0) {
            if (remember) {
              localStorage.setItem('username', username)
              localStorage.setItem('password', password)
            } else {
              localStorage.removeItem('username')
              localStorage.removeItem('password')
            }

            this.props.history.push('/app');
          }
        })
      }
    });
  };

  componentDidMount() {
    let username = localStorage.getItem('username')
    let password = localStorage.getItem('password')

    this.props.form.setFieldsValue({ username, password });
  }

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