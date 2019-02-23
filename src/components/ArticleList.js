import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default class ArticleList extends React.Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        openArticleId: null
    }

    render() {
        let articleElements = this.props.articles.map(
            (article) => {
                let isOpen = article.id === this.state.openArticleId
                return (<li key={article.id}>
                    <Article
                        article={article}
                        isOpen={isOpen}
                        toggleOpen={this.toggleOpenArticle.bind(this, article.id)}
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

    toggleOpenArticle(openArticleId) {
        this.setState({
            openArticleId: openArticleId
        });
    }
}