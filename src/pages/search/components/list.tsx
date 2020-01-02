import React from "react"
import { Row, Col, Card, Tag } from 'antd'

import { Pets } from "../index"
interface iProps {
    list: Array<Pets>
}

const List:React.FC<iProps> = (props:iProps) => (
    <Row gutter={[16, 16]}>
        {props.list.map( ( item:Pets ) => (
            <Col span={6} key={item.id}>
                <Card
                    hoverable
                >
                    <Card.Meta 
                        title={item.name}
                        description={<b>{item.specie.name} | <small>{item.breed_primary.name}</small> </b>}
                    />
                    <br/>
                    {item.sex_key == "MALE" ? <Tag color="blue">MALE</Tag> : <Tag color="magenta">FAMALE</Tag>}
                    
                    <Tag >{item.size_key}</Tag>
                    <Tag >{item.age_key}</Tag>
                </Card>
            </Col> 
        ))}
               
    </Row>
)


export default List