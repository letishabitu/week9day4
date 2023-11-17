import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// IMPORT OUR COMPONENTS
import Form from './components/Form'
import StarWars from './components/starWars'
import './style.css'


function App() {
  // create a variable to hold my api key
  

  // create state to hold the movie data
  const [starship, setStarship] = useState(null);

  //    ===== this part is new  =====
  // create a function that is given the search term then does the fetch request
  //    =====                   =====
  // Function getMovie
  const getstarWar = async (searchTerm) => {
    // create a variable that combines the parts of the url into one
    const baseUrl = 'https://swapi.dev/api/';
    const url = baseUrl + searchTerm;
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setStarship(data);
    } catch (e) {
      console.error(e);
    }
  }

    //This will run on the first render but not on subsquent renders
    // useEffect(() => {
    //   const movieArray = ["Clueless", "Mulan", "lilo & stitch", "batman", "air bud"];
    //   const firstMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
    //   getstarWar(firstMovie);
    // }, []);
  
  // pass the function down to the form via props
  // <Form moviesearch={getMovie} />
  // that is passing our getMovie method as props that are called moviesearch in the Form
  return (
    <div className='App'>
      <Form starwarSearch={getstarWar}/>
      <StarWars starship={starship}/>
    </div>
  )
}

export default App