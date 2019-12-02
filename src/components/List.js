import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Divider, Spin, Button, Modal } from 'antd';
import { medicinesGetListRequest, medicinesRemoveListItemRequest } from "../redux/actions";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const mapStateToProps = state => {
    const { loading, data, step, visible, error } = state.medicinesListReducer;
    return { loading, data, step, visible, error };
};

export default connect(mapStateToProps)(class List extends Component {
    componentDidMount() {
        this.props.dispatch(medicinesGetListRequest());
    }

    showModal = record => this.props.dispatch({ type: 'DEFINE_UPDATE_DATA', payload: { visible: true, data: record } })
    hideModal = () => this.props.dispatch({ type: 'HIDE_MODAL', payload: { visible: false } });
    removeMedicine = record => this.props.dispatch(medicinesRemoveListItemRequest(record));


    render() {

        if(this.props.error) {
            return <p>{this.props.error}</p>;
        }

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: 'Action',
                key: 'action',
                render: record => {
                    return (
                        <span>
                        <a onClick={() => this.showModal(record)}>Edit</a>
                        <Divider type="vertical"/>
                        <a onClick={() => this.removeMedicine(record)}>Delete</a>
                      </span>
                        )
                },
            },
        ];
        return (
            <Spin tip='Loading ...' spinning={this.props.loading}>
                <Table
                    pagination={false}
                    rowKey='id'
                    columns={columns}
                    dataSource={this.props.data}
                />
                <Button type='primary' onClick={this.showModal}>Add</Button>
                <Modal
                    title={`Add/edit medicine ${this.props.step === 1 ? '1/2' : '2/2'}`}
                    visible={this.props.visible}
                    onOk={this.hideModal}
                    footer={null}
                    onCancel={this.hideModal}>
                        {this.props.step === 1 ? <FirstStep /> : <SecondStep />}
                </Modal>
            </Spin>
        )
    }
})
