import React, {Component} from 'react'
import CommentsList from '../CommentsList'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC';
import './style.css'

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
        }).isRequired,
        toggleOpen: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired
    }

    render(){
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    { !isOpen ? 'Открыть статью' : 'Закрыть статью' }
                </button>
                <button onClick={this.handleDelete.bind(this)}>Delete</button>
                {this.getBody()}
            </div>
        )
    }

    handleDelete(){
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
    }

    getBody(){
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        return <section>
            {article.text}
            {<CommentsList article={article} />}
        </section>
    }
}


export default connect(null, {deleteArticle})(Article)