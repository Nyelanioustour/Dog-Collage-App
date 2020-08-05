import React from 'react';
import './App.css';
import PhotoGetter from './PhotoGetter'
import AdvanceButton from './AdvanceButton'
import DogSection from './DogSection';
import SaveButton from './SaveButton';
import CollageHeader from './CollageHeader';

class App extends React.Component {  
  constructor() {    
    super()    
    this.state = {      
      photo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg",
      dog_array: []
    }    
  }

  getPhoto = () => {
    fetch("https://dog.ceo/api/breeds/image/random").then(res=>res.json()).then(data=>{
      console.log(data.message)
      this.setState(
        {photo_url: data.message}
      )
   })
  }

  saveDog = () =>{
    let newArray = []
    this.state.dog_array.forEach(url=>{
      newArray.push(url)
     })
     newArray.push(this.state.photo_url)
    this.setState(
      {dog_array: newArray}
    )
  }
    
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <PhotoGetter
            photo_url = {this.state.photo_url}
            />
            <AdvanceButton
            getPhoto = {this.getPhoto}
            />
            <SaveButton
            saveDog = {this.saveDog}
            />
          </header>
          <body>
            <CollageHeader/>
            <DogSection
            dog_array = {this.state.dog_array}/>
          </body>
          
        </div>
    )
  }
}
export default App
