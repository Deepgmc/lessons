import React, {Component} from 'react'
import Article from './Article/Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'
import {connect} from 'react-redux';
import {changeSelect} from '../AC';
import {filtratedArticlesSelector} from '../selectors';

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

export default connect((state) => {
    return filtratedArticlesSelector(state)
})(accordeon(ArticleList))



