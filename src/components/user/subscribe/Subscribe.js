import React from "react";
import {Radio, Row, Col} from "antd";
import QRCode from 'qrcode.react'

export default class Subscribe extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}>
                    </Col>
                    <Col xs={{span: 11, offset: 1}} lg={{span: 6, offset: 2}}>
                        <Row>
                            <Radio.Group>
                                <Radio value={1}>V2ray</Radio>
                                <Radio value={2}>SSR</Radio>
                                <Radio value={3}>SS</Radio>
                            </Radio.Group>
                        </Row>
                        <Row>https://api.sebs.club/ssr/7415035e-336b-498d-9dde-2f4c353fc439</Row>
                        <Row>
                            <QRCode value="https://www.baidu.com/img/baidu_jgylogo3.gif"/>
                        </Row>
                    </Col>
                    <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}>
                    </Col>
                </Row>


            </div>
        )
    }
}
