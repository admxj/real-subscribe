import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Node from "./node/Node";
import Share from "./share/Share";
import Subscribe from "./subscribe/Subscribe";
import {Breadcrumb, Layout, Menu} from "antd";

const {Content, Sider} = Layout;

export default class User extends React.Component {

    render() {
        return (
            <Layout>
                <Layout.Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Layout.Header>
                <Layout>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <Menu.Item key="1"><Link to="/user/node">Node</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/user/share">share</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/user/subscribe">subscribe</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route path="/user/node">
                                    <Node/>
                                </Route>
                                <Route path="/user/share">
                                    <Share/>
                                </Route>
                                <Route path="/user/subscribe">
                                    <Subscribe/>
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}