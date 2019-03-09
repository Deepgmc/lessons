import React, {Component} from 'react'
import CommentsList from '../CommentsList'
import PropTypes from 'prop-types'
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
                {this.getBody()}
            </div>
        )
    }

    getBody(){
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        return <section>
            {article.text}
            {<CommentsList comments={article.comments} />}
        </section>
    }
}


export default Article;