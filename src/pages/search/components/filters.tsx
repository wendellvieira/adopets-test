import React from "react"
import { Select, Radio, Button, Row, Col } from 'antd';
import {iFilter, sex_key, size_key, age_key} from "../index";

const { Option } = Select;
interface iProps {
    filters?: iFilter,
    setFilter: (filter:iFilter ) => void,
    refreshList: () => void
}

const Filters: React.FC<iProps> = ( props:iProps ) => {

    return (
        <React.Fragment>
            <Row type="flex" justify="start" gutter={[16, 32]}>
                <Col>
                    <Radio.Group 
                        value={(props.filters||{}).sex_key}
                        onChange={ ev => props.setFilter({ sex_key: ev.target.value }) }
                    >
                        <Radio.Button value={sex_key.MALE}>MALE</Radio.Button>
                        <Radio.Button value={sex_key.FEMALE}>FEMALE</Radio.Button>
                    </Radio.Group>
                </Col>
                <Col>
                    <Select 
                        value={(props.filters||{}).size_key}
                        onChange={ (size_key:number | null ) => props.setFilter({size_key}) }
                        style={{ width: 150 }}
                        placeholder="SELECT A SIZE">
                            <Option value={size_key.ALL}>ALL</Option>
                            <Option value={size_key.S}>SMALL</Option>
                            <Option value={size_key.M}>MEDIUM</Option>
                            <Option value={size_key.L}>LARGE</Option>
                            <Option value={size_key.XL}>EXTRA LARGE</Option>
                    </Select>
                </Col>
                <Col>
                    <Select 
                        value={(props.filters||{}).age_key}
                        onChange={ (age_key:number | null ) => props.setFilter({age_key}) }
                        style={{ width: 150 }}
                        placeholder="SELECT A AGE">
                            <Option value={age_key.ALL}>ALL</Option>
                            <Option value={age_key.BABY}>BABY</Option>
                            <Option value={age_key.YOUNG}>YOUNG</Option>
                            <Option value={age_key.ADULT}>ADULT</Option>
                            <Option value={age_key.SENIOR}>SENIOR</Option>
                    </Select>
                </Col>
                <Col>
                    <Button type="primary" onClick={props.refreshList} icon="heart">
                        FIND MY PET
                    </Button>
                </Col>
            </Row>

            <hr className="divider"/>
    
        </React.Fragment>
    );
}


export default Filters;