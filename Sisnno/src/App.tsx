import logo from "./assets/baleia - Sisnno (1).png";
import React, { useState, useEffect } from 'react';
import themaClaro from './assets/claro.png';
import themaEscuro from './assets/dark.png';
import './index.css'; 





const Titulo = () =>{
  const title = <h1 id="titulo">Sisnno</h1>

  return title
}



const Imagem = () =>{
  const imagem = (
  <>
  <div className="centralLogo">
  <img src={logo} alt="Logo da empresa Sisnno" />
  </div>
  </>
  )

  return imagem

}

const Login = () =>{
  const entrar = (
  <>
  <h2 className="textoInicio">Entrar no Aplicativo</h2>
  <p className="textoSecundario">Acesse sua conta através do seu e-mail e senha</p>
  </>)

  return entrar

}

const Input = () =>{
  const botoes = (
    <>
    <div id="ajusteEntrada">
  <input type="email" name="email" id="email" placeholder="E-mail" />
  <input type="password" name="password" id="password" placeholder="Senha"/>
  <button id="botao1"><a href="#" id="textoPrincipalBotaoHome">ENTRAR</a></button>
  <button id="botao2"><a href="#" id="textoSegundoBotaoHome">Esqueci minha senha</a></button>
  </div>  
  </>)
  

  return botoes

}



const Modo: React.FC = () => {
  const [temaAtual, setTemaAtual] = useState<'claro' | 'escuro'>('claro');

  const alternarTema = () => {
    setTemaAtual(prevTema => (prevTema === 'claro' ? 'escuro' : 'claro'));
  };

  useEffect(() => {
    const body = document.body;
    const titulo = document.querySelector('#titulo');
    const textoPrincipal = document.querySelector(".textoInicio")
    const textoSecundario = document.querySelector(".textoSecundario")
    const botao = document.querySelector("#botao2")



    if (temaAtual === 'claro') {
      body.classList.remove('escuro');
      body.classList.add('claro');
      titulo?.classList.remove('escuro');
      titulo?.classList.add('claro');
      textoPrincipal?.classList.add("claro")
      textoPrincipal?.classList.remove("escuro")
      textoSecundario?.classList.add("claro")
      textoSecundario?.classList.remove("escuro")
      botao?.classList.add("claro")
      botao?.classList.remove("escuro")
    } else {
      body.classList.remove('claro');
      body.classList.add('escuro');
      titulo?.classList.remove('claro');
      titulo?.classList.add('escuro');
      textoPrincipal?.classList.remove("claro")
      textoPrincipal?.classList.add("escuro")
      textoSecundario?.classList.remove("claro")
      textoSecundario?.classList.add("escuro")
      botao?.classList.remove("claro")
      botao?.classList.add("escuro")
    }
  }, [temaAtual]);

  return (
    <div>
      <div id="caixaThema">
        <img
          src={temaAtual === 'claro' ? themaClaro : themaEscuro}
          alt={`Tema ${temaAtual} do site`}
          onClick={alternarTema}
          style={{ cursor: 'pointer', width: '3.5rem' }}
        />
      </div>
    </div>
  );
};

function App() {


  return (
    <>
      <Modo/>
      <Titulo/>
      <Imagem/>
      <Login/>
      <Input/>
    </>
  )
}

export default App
