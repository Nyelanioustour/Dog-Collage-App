import React from 'react'

export default class AdvanceButton extends React.Component{
    render() {
        return(
            <div id="advance-button">
                <button onClick = {this.props.getPhoto}>New Dog!</button>
            </div>
        )


    }
}