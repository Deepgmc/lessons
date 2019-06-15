import React from 'react'
import ArticleList from '../ArticleList'
import UserForm from '../UserForm/UserForm'
import Counter from '../Counter'

import './globalStyle.css';

export default class App extends React.Component {

    render() {

        return (
            <div>
                <Counter />
                <UserForm />
                <ArticleList />
            </div>
        )
    }
}