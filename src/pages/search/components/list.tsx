import React from "react"
import { Row, Col, Card } from 'antd'

const List:React.FC = () => (
    <Row gutter={[16, 16]}>
        <Col span={6}>
            <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </Col>        
    </Row>
)

export default List