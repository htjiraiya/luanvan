import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './login.scss';

function Login() {
    return (
        <section className='login-wrapper'>
            <div className="login-container">
                <br />
                <h1 className='text-center'>Đăng nhập</h1>
                <Form inline className='form-login-container'>
                    <FormGroup floating>
                        <Input
                            id="username"
                            name="username"
                            placeholder="Tên tài khoản"
                            type="text"
                        />
                        <Label for="username">
                        Tên tài khoản
                        </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Mật khẩu"
                            type="password"
                        />
                        <Label for="examplePassword">
                            Mật khẩu
                        </Label>
                    </FormGroup>
                    {' '}
                    <Button className='center'>
                        Đăng nhập
                    </Button>
                </Form>
                <br />
            </div>
        </section>
    );
}

export default Login;