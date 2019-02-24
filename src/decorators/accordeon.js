import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class Accordeon extends ReactComponent {

    state = {
        openItemId: null
    }

    render() {
        return <OriginalComponent
            {...this.props}
            {...this.state}
            toggleOpen={this.toggleOpenItem}
        />
    }

    toggleOpenItem = itemId => e => {
        this.setState({
            openItemId: this.state.openItemId === itemId ? null : itemId
        });
    }
}