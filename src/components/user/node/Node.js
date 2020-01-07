import React from "react";
import {Row, Col, DatePicker, Button, List, Typography, Layout, Icon} from 'antd';

export default class Node extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.',
            ]
        };
    }

    addButtonOnclick() {
        alert("123")
    }

    render() {
        return (
            <Layout>
                <Button onClick={this.addButtonOnclick} type={"primary"}>Button</Button>
                <Row>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item>
                                <Row >
                                    <Col span={6}>icon</Col>
                                    <Col span={6}>{item} </Col>
                                    <Col span={6}>
                                        <Button type="primary" shape="circle">
                                            <Icon type="delete"/>
                                        </Button>
                                    </Col>
                                    <Col span={6}>
                                        <Button type="danger" shape="circle">
                                            <Icon type="edit"/>
                                        </Button>
                                    </Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                </Row>
            </Layout>
        );
    }
}
