	
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const obj = {
    query: 'star wars',
    page: 1,
  };

  useEffect(() => {
    fetch('/api/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ obj }),
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur:', error));
  }, [])

  return (
    <>
      <div>
          <h1>Données récupérées :</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
     
    </>
  )
}

export default App
