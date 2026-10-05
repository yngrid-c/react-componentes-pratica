function Nota (props){
    return(
    <>
    <div className="cartao">
        <p>DISCIPLINA: {props.disciplina}</p>
        <p>NOTA: {props.nota}</p>
    </div>
    </>
    )
}

export default Nota