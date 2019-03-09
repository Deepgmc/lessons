import React from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm/UserForm'
import ReactSelect from 'react-select'
import { articles } from '../fixtures';

export default class App extends React.Component {

    state = {
        selection: null
    }

    render() {
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <ReactSelect options={options} value={this.state.selection} onChange={this.changeSelection} />
                <UserForm />
                <ArticleList articles={articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({selection});
}