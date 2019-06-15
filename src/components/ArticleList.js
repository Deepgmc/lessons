import React, {Component} from 'react'
import Article from './Article/Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'
import {connect} from 'react-redux';
import {changeSelect} from "../AC";

class ArticleList extends React.Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpen: PropTypes.func.isRequired,
        openItemId: PropTypes.string
    }

    static defaultProps = {
        articles: []
    }

    render() {
        let {toggleOpen} = this.props,
            openArticleId = this.props.openItemId,
            articleElements = this.props.articles.map(
                (article) => {
                    return (<li key={article.id}>
                        <Article
                            article={article}
                            isOpen={openArticleId === article.id}
                            toggleOpen={toggleOpen(article.id)}
                        />
                    </li>)
                }
        );
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(({filters, articles}) => {
    const {selected_id} = filters
    let filteredArticles = articles.filter(article => {
        return !selected_id || selected_id === article.id
    })

    return {
        articles: filteredArticles
    }
})(accordeon(ArticleList))



