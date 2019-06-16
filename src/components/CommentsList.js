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
        const {isOpen, article} = this.props
        const {comments} = article
        if(!isOpen) return null;
        if(!comments.length)return (
            <div>
                <p>No comments</p>
            </div>
        )


        return (
            <div>
                <ul>
                    {comments.map(id => <li key = {id}><Comment articleId={article.id} id = {id} /></li>)}
                </ul>
            </div>
        )
    }
}
export default toggleOpen(CommentsList);