import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DayPicker from './DayPicker/DayPicker'
import CommentForm from '../CommentForm/CommentForm'
import ReactSelect from 'react-select';
import {connect} from "react-redux";
import {changeSelect} from "../../AC";
import {mapToArr} from '../../helpers'


class UserForm extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        username: ''
    }

    render() {
        const articles = this.props.articles
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
//<DayPicker /><CommentForm />
        return (
            <div>
                <hr />
                <ReactSelect options={options} onChange = {this.handleChangeSelection.bind(this)} />
                <hr />
                Name: <input type="text" value = {this.state.username} onChange = {this.handleUserChange.bind(this)}/>
                <hr />
            </div>
        );
    }

    handleChangeSelection(e){
        const { changeSelect} = this.props
        changeSelect(e.value)
        console.log('change selection handle')
    }

    handleUserChange(e) {
        this.setState({
            username: e.target.value
        })
    }
}

export default connect(
    state => ({
        articles: mapToArr(state.articles)
    }), {changeSelect}
)(UserForm)
