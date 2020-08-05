import React from 'react'



export default class PhotoGetter extends React.Component{
    render() {
        return(
            <div>
                <img src={this.props.photo_url} className="App-logo" alt="logo" id="photo-space"/>
            </div>
        )


    }
}