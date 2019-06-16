import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../../selectors'
import './style.css'
import {addComment} from '../../AC'

class Comment extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        //from connect with store
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    render() {
        const comment = this.props.comment
        return (
            <div>
                <section>
                    {comment.text}. <b>by {comment.user}</b>
                    Name: <input type="text"/>
                    Comment: <input type="text"/>
                    <button onClick={this.handleAddComment.bind(this)}>Add</button>
                </section>
            </div>
        )
    }

    handleAddComment(){
        const {addComment, comment, articleId} = this.props
        addComment(comment, articleId)
    }
}

const mapStateToProps = () => {
    const thisCommentSelector = commentSelectorFactory()
    return (state, ownProps) => {
        return {comment: thisCommentSelector(state, ownProps)}
    }
}

export default connect(mapStateToProps, {addComment})(Comment)
