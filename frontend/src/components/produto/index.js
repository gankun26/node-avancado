
export default function Produto(props) {
    
    return(
        <span>
            <ul>
            
                    <li>categoria: {props.dados.categoria}</li>
                    <li>descricao: {props.dados.descricao}</li>
                    <li>preco: R$ {props.dados.preco}</li>
                
            </ul>
        </span>
    )
}