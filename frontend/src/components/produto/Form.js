import {useState} from 'react'

export default function CadGame() {
    const [dados, setDados] = useState({
        categoria : "",
        descricao : ""
    })

    function handleChange({target}) {
        const {id, value} = target
        setDados({...dados, [id] : value})
        console.log(dados)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:4000/cad', {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(dados)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="categoria">Categoria </label>
            <select id="descricao" onChange={handleChange} name="descricao">
                <option value="">selecione</option>
                <option value="liquidificador">Liquidificador</option>
                <option value="maquina de lavar">Maquina de Lavar</option>
                <option value="fogao">Fogão</option>
                <option value="geladeira">Geladeira</option>
            </select>
            <input type="text" name="descricao" id="descricao" onChange={handleChange} placeholder="Insira o nome do produto" />
            <input type="submit" value="cadastrar" />
        </form>
    )
}