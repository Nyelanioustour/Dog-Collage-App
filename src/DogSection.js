import React from 'react'
import SavedDogs from './SavedDogs'



export default class DogSection extends React.Component{
    render() {
        return(
            <div>
                {this.props.dog_array.map(photo_url=><SavedDogs
                    photo_url = {photo_url}
                    />)}
            </div>
        )
    }
}