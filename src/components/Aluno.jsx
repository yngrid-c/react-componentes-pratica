function Aluno (props){
    return(
    <>
    <div className="cartao">
        <p>NOME: {props.nome}</p>
        <p>TURMA: {props.turma}</p>
    </div>
    </>
    )
}

export default Aluno