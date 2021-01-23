import React from "react";
import {Modal, Form, Input, Radio} from 'antd';

export default class AddNode extends React.Component {

    render() {
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 22},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 12,
                    offset: 0,
                },
                sm: {
                    span: 12,
                    offset: 6,
                },
            },
        };
        return (
            <Modal
                title="添加节点"
                visible={this.props.visible}
                onOk={this.props.handleOk}
                onCancel={this.props.handleCancel}
            >
                <Form {...formItemLayout}>
                    <Form.Item {...tailFormItemLayout}>
                        <Radio.Group >
                            <Radio value={1}>V2ray</Radio>
                            <Radio value={2}>SSR</Radio>
                            <Radio value={3}>SS</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Host">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="Port">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="password">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="path">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="remark">
                        <Input></Input>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}


/*
The href attribute is required for an anchor to be keyboard accessible.
Provide a valid, navigable address as the href value.
If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.
Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
*/
