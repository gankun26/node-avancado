import {useState, useEffect} from 'react'
import api from './api'
import Produto from './components/produto'
import Form from './components/produto/Form'
import main from '../src/main.css'


export default function App() {
  const [x, setX] = useState([])

  useEffect(async () => {
      const dados = await api()
      setX(dados)
  }, [])

  const lista = x.map(item => ( <Produto dados={item} /> ))

  return (
    <div className="App">
      <header className="App-header" id="heade_main">
         FULLSTACK ELETRO
      </header>

      <main id="body_main">
        <h3>Produtos</h3>
        <Form />
        <div id="mostruario">
          {lista}
        </div>
      </main>
    </div>
  );

}


