import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {

    state = {
        isOpen: false
    }

    render() {
        return <OriginalComponent
            {...this.props}
            {...this.state}
            toggleOpen={this.toggleOpen.bind(this)}
        />
    }

    toggleOpen(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}