	
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const formData = new FormData();
  formData.append("query", "star wars");
  formData.append("page", 1);

  
  useEffect(() => {
    fetch('/api/api.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => setData(data["results"] ))
      .catch(error => console.error('Erreur:', error));  
  }, [])

  return (
    <>
      <div>
          <h1>Données récupérées :</h1>
          
          
            <div style={{ display: "flex", gap:"20px"}} >{ 
          
            data ? data.map((movie, i) => {
              return (
                <>
                  <div key={i}> 
                      <h1> { movie["title"] } </h1> 
                      <img src={ "https://image.tmdb.org/t/p/original/" + movie["poster_path"] } style={{ height: "1000px", width: "670px" }}/> 
                  </div>
                </>
              )
            })  : <h1> AHAAAAAAAAAAAAAAAA</h1>
            
            }</div>
         

          

        </div>
     
    </>
  )
}

export default App
