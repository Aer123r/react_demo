import React, {useState} from 'react';
import {Button, Form, Input} from "antd";

const LoginPage = () => {

    return (
        <Form>
            <Form.Item label="Username">
                <Input/>
            </Form.Item>
            <Form.Item label="Password">
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Log in
                </Button>
            </Form.Item>
        </Form>

    );
};

export default LoginPage;