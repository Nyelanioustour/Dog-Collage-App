import React from 'react'



export default class DogSection extends React.Component{
    render() {
        return(
            <div>
                <button onClick = {this.props.saveDog}> Save Dog</button>
            </div>
        )
    }
}