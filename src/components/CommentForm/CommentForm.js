import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
    static propTypes = {}

    limits = {
        user: {
            min: 5,
            max: 15
        },
        text: {
            min: 20,
            max: 50
        }
    }

    state = {
        user: '',
        text: ''
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        this.getClassName = this.getClassName.bind(this);
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text"
                                 value={this.state.user}
                                 onChange={this.handleChange('user')}
                                 className={this.getClassName('user')}
                    />
                    Comment: <input type="text"
                                    value={this.state.text}
                                    onChange={this.handleChange('text')}
                                    className={this.getClassName('text')}
                    />
                </form>
            </div>
        );
    }

    getClassName = (type) => this.state[type].length > this.limits[type].max || this.state[type].length < this.limits[type].min ? 'error-class' : ''

    handleChange = type => e => {
        this.setState({
            [type]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            user: '',
            name: ''
        })
    }
}

export default CommentForm;