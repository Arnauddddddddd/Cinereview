	
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const formData = new FormData();
  formData.append("query", "star wars");
  formData.append("page", 3);

  useEffect(() => {
    fetch('/api/api.php', {
      method: 'POST',
      body: formData,
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
