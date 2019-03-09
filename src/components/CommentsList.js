import React from 'react'
import Comment from './Comment/Comment'
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

class CommentsList extends React.Component {

    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render(){
        let {isOpen, toggleOpen} = this.props;
        return (
            <div>
                <button onClick = {toggleOpen}>
                    { !isOpen ? 'Открыть комменты' : 'Закрыть комменты' }
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody(){
        let {isOpen} = this.props;
        const {comments} = this.props,
               commentsElements = comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>);
        if(!isOpen) return null;
        return (
            <section>
                {commentsElements}
            </section>
        )
    }
}
export default toggleOpen(CommentsList);