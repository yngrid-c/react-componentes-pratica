import Titulo from './components/Titulo'
import Aluno from './components/Aluno'
import Nota from './components/Nota'
import Produto from './components/Produto'
import './App.css'

function App() {
  return(
    <>
    <Titulo/>

    <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
    <Aluno nome="Ana" turma="DS" />
    <Aluno nome="Pedro" turma="DS" />

    <Nota disciplina="React" nota={8.5} />
    <Nota disciplina="port" nota={10} />
    <Nota disciplina="const" nota={7.0} />
    
    <Produto
    nome="Teclado Mecânico"
    descricao="Teclado com iluminação RGB"
    preco={250}
    disponivel={true}
    />
    <Produto 
    nome="Mouse Gamer" 
    descricao="Mouse óptico de alta precisão 12000 DPI" 
    preco={120} 
    disponivel={false}
    />
    <Produto
    nome="Monitor 144Hz" 
    descricao="Monitor IPS de 24 polegadas para jogos" 
    preco={899} 
    disponivel={true}
    />
    <Produto 
    nome="Headset Bluetooth" 
    descricao="Fone de ouvido com cancelamento de ruído" 
    preco={350} 
    disponivel={false}
    />

    </>
  )
}

export default App
