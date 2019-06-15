import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    }
    render (){
        return (
            <div>
                <h3>{this.props.counter}</h3>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }

    handleIncrement = () => {
        this.props.increment()
    }
}

export default connect(
    (store) => ({
        counter: store.count
    }),
    { increment }
)(Counter)
