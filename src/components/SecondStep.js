import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { medicinesCreateListItemRequest, medicinesUpdateListItemRequest } from "../redux/actions";

const mapStateToProps = state => {
    const { temporary, statusModal } = state.medicinesListReducer;
    return { temporary, statusModal };
};

export default connect(mapStateToProps)(class SecondStep extends Component {
    state = {
        composition: '',
        indication: '',
        control_indication: ''
    };

    cancelProcess = () => this.props.dispatch({ type: 'HIDE_MODAL', payload: { visible: false } });
    goPrevView = () => this.props.dispatch({ type: 'CHANGE_VIEW', payload: 1 });
    handleFormInputs = ({ target: { name, value }}) => this.setState({[name]: value });

    editOrCreateMedicine = status => {
        if(status === 'EDIT') {
            this.props.dispatch(medicinesUpdateListItemRequest({ id: 5, name: 'Yaroslav', email: 'test@test.com', phone: '1111' }));
        } else {
            this.props.dispatch(medicinesCreateListItemRequest({ id: 11, name: 'Yaroslav', email: 'test@test.com', phone: '1111' }));
        }
        this.cancelProcess();
    };

    render() {
        const { composition, indication, control_indication } = this.state;

        return (
            <div>
                <Form onSubmit={this.createNewMedicine}>
                    <Form.Item label='Composition and Release Form'>
                        <Input.TextArea
                            name='composition'
                            onChange={this.handleFormInputs}
                            value={composition}
                        />
                    </Form.Item>
                    <Form.Item label='Indication'>
                        <Input.TextArea
                            name='indication'
                            onChange={this.handleFormInputs}
                            value={indication}
                        />
                    </Form.Item>
                    <Form.Item label='Control Indication'>
                        <Input.TextArea
                            name='control_indication'
                            onChange={this.handleFormInputs}
                            value={control_indication}
                        />
                    </Form.Item>
                </Form>
                <Button type='default' onClick={this.cancelProcess}>Cancel</Button>
                <Button type='primary' onClick={this.goPrevView}>Prev</Button>
                <Button type='primary' onClick={() => this.editOrCreateMedicine(this.props.statusModal)}>Create/Edit</Button>
            </div>
        )
    }
})
