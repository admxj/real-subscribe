import React from "react";
import {Avatar, Button, List, Row, Skeleton} from 'antd';
import AddNode from "./AddNode";

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
            ],
            modelVisible: false
        };
    }

    editOnClick() {

    }

    delOnClick() {

    }

    addButtonOnclick() {
        this.setState({
            modelVisible: true,
        });
    }

    modelHandleCancel(e) {
        this.setState({
            modelVisible: false,
        });
    }

    modelHandleOk(e) {
        this.setState({
            modelVisible: false,
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.addButtonOnclick.bind(this)} type={"primary"}>Button</Button>
                <AddNode visible={this.state.modelVisible} handleOk={this.modelHandleOk.bind(this)}
                         handleCancel={this.modelHandleCancel.bind(this)}/>
                <Row>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item
                                actions={[
                                    <Button type="primary" key="list-loadmore-edit"
                                            onClick={this.editOnClick}>edit</Button>,
                                    <Button type="primary" key="list-loadmore-more"
                                            onClick={this.delOnClick}>del</Button>
                                ]}
                            >
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar
                                                src="https://cdn.admxj.com/wp-content/uploads/2019/01/icon-1.png"/>
                                        }
                                        title={item}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                    <div>content</div>
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </Row>
            </div>
        );
    }
}
