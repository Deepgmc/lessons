import React from 'react'
import ArticleList from '../ArticleList'
import UserForm from '../UserForm/UserForm'
//import ReactSelect from 'react-select'
import Counter from '../Counter'

import './globalStyle.css';

export default class App extends React.Component {

    state = {
        selection: null
    }

    render() {
        /*const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));*/
        //<ReactSelect options={options} value={this.state.selection} onChange={this.changeSelection} />
        return (
            <div>
                <Counter />

                <UserForm />
                <ArticleList />
            </div>
        )
    }

    //changeSelection = selection => this.setState({selection});
}