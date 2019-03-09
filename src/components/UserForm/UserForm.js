import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker from './DayPicker/DayPicker'
import CommentForm from '../CommentForm/CommentForm'


class UserForm extends Component {
    static propTypes = {}

    state = {
        username: ''
    }

    render() {
        return (
            <div>
                <hr />
                <DayPicker />
                <CommentForm />
                Name: <input type="text" value = {this.state.username} onChange = {this.handleUserChange.bind(this)}/>
                <hr />
            </div>
        );
    }

    handleUserChange(e) {
        this.setState({
            username: e.target.value
        })
    }
}

export default UserForm;