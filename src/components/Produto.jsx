function Produto (props){
    return(
    <>
    <div className="cartao">
        <p>NOME: {props.nome}</p>
        <p>DESCRIÇÃO: {props.descricao}</p>
        <p>PREÇO: {props.preco}</p>
        <p>DISPONIVEL: {props.disponivel ? "true" : "false"}</p>
        <button>Comprar</button>
    </div>
    </>
    )
}

export default Produto