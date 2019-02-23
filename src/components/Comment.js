import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends React.Component {

    static propTypes = {
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    constructor(props){
        super(props)
    }

    render(){
        const comment = this.props.comment;

        return (
            <div>
                <section>{comment.text}. <b>by {comment.user}</b></section>
            </div>
        )
    }
}
