import React from 'react';
import './App.css';

function Header() {
  return (
    <div className="header">
      <p>Mentoria SheCode</p>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="container">
      <p className="about">Desenvolvimento Front-End</p>
      <h1 className="mentor">Olá, seja bem-vinda a <br/>Mentoria SheCode</h1>
      <p className="text">Descubra seu potencial no desenvolvimento front-end com mentoria exclusiva para mulheres. 
      <br/>Aprenda de forma personalizada, supere desafios e alcance seus objetivos na carreira de programação! 
      <br/>Junte-se a nós e faça parte de uma comunidade que apoia seu crescimento <br/>e sucesso nesse mundão de códigos!</p>
      <div className="button-container">
      <button className="btn-contact">Entre em contato! </button>
      <button className="btn-about">Saiba Mais!</button>
      </div>
      <div className="circle"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
    </div>
  );
}

export default App;
