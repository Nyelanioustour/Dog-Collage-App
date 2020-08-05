import React from 'react'




export default class SavedDogs extends React.Component{
    render() {
        return(
            <div>
                <img src={this.props.photo_url} alt="dog" id="saved-space"/>
            </div>

        )


    }
}