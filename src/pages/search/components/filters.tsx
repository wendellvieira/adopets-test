import React from "react"
import { Select, Radio, Button, Row, Col } from 'antd';

const size:object  = { S:"SMALL", M: "MEDIUM", L: "LARGE", XL: "EXTRA LARGE" }
const age:string[] = [ "BABY", "YOUNG", "ADULT", "SENIOR" ]

const Filters: React.FC = () => {

    const mapOptions = ( options:string[]  ) => {
        return options.map( ( item:string, index:number ) => (
            <Select.Option key={index} value={item}>
                {item}
            </Select.Option>
        ))
    }
    

    return (
        <React.Fragment>
            <Row type="flex" justify="start" gutter={[16, 32]}>
                <Col>
                    <Radio.Group>
                        <Radio.Button value="MALE">MALE</Radio.Button>
                        <Radio.Button value="FEMALE">FEMALE</Radio.Button>
                    </Radio.Group>
                </Col>
                <Col>
                    <Select 
                        style={{ width: 150 }}
                        placeholder="SELECT A SIZE">
                        {mapOptions( Object.values(size) )}
                    </Select>
                </Col>
                <Col>
                    <Select 
                        style={{ width: 150 }}
                        placeholder="SELECT A AGE">
                        {mapOptions( age )}
                    </Select>
                </Col>
                <Col>
                    <Button type="primary" icon="heart">
                        FIND MY PET
                    </Button>
                </Col>
            </Row>

            <hr className="divider"/>
    
        </React.Fragment>
    );
}


export default Filters;