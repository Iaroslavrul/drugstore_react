import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';

const mapStateToProps = state => {
    const { temporary } = state.medicinesListReducer;
    return {
        temporary
    }
};

export default connect(mapStateToProps)(class FirstStep extends Component {
    goNextView = () => this.props.dispatch({ type: 'CHANGE_VIEW', payload: 2 });
    cancelProcess = () => this.props.dispatch({ type: 'HIDE_MODAL', payload: { visible: false } });
    handleFormInputs = ({ target: { name, value }}) => this.setState({[name]: value });

    render() {
        const { username, name, email } = this.props.temporary;

        return (
            <div>
                <Form>
                    <Form.Item label='Code'>
                        <Input
                            name='code'
                            onChange={this.handleFormInputs}
                            value={name}
                        />
                    </Form.Item>
                    <Form.Item label='Name'>
                        <Input
                            name='name'
                            onChange={this.handleFormInputs}
                            value={username}
                        />
                    </Form.Item>
                    <Form.Item label='Price'>
                        <Input
                            name='price'
                            onChange={this.handleFormInputs}
                            value={email}
                        />
                    </Form.Item>
                </Form>
                <Button type='default' onClick={this.cancelProcess}>Cancel</Button>
                <Button type='primary' onClick={this.goNextView}>Next</Button>
            </div>
        )
    }
})
