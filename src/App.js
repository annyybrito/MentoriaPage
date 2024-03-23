import React, { useState } from 'react';
import './App.css';
import fotoLanding from '../src/assets/foto-landing.png'; // Importa a fotoLanding

function AnimatedText({ onClick }) {
  return (
    <div className="animated-text">
      <div className="background"></div>
      <div className="text-container">
        <h1 className="welcome-text">Olá, seja bem-vinda à Mentoria SheCode!</h1>
        <button className="btn-scroll" onClick={onClick}>Saiba Mais</button>
      </div>
    </div>
  );
}

function AboutSectionPerson() {
  return (
    <div className="about-container" id="about">
      <div className="text">
        <h2 className="about-me">Quem sou eu?</h2>
        <p>Muito prazer! Sou a Anny, desenvolvedora full-stack formada em Análise e Desenvolvimento de Sistemas,
          mentora front-end e criadora de conteúdo. Minha paixão é ajudar as pessoas e minha missão é impulsionar o feminino 
          no mundo da tecnologia, agregando mulheres nesse universo e apoiando-as no aprendizado em front-end. 
          Estou aqui para compartilhar conhecimento, oferecer suporte e criar uma comunidade onde todas possam prosperar juntas.
          Seja bem-vinda ao meu mundo de desenvolvimento e aprendizado!</p>
          {/* Adiciona a fotoLanding */}
          <div className="photo-mentor">
            <img src={fotoLanding} alt="Foto da Mentora" />
          </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="container">
      <h1 className="mentor">Mentoria SheCode</h1>
      <p className="text">Descubra seu potencial no desenvolvimento front-end com mentoria exclusiva para mulheres. 
      Aprenda de forma personalizada, supere desafios e alcance seus objetivos na carreira de programação! 
      Junte-se a nós e faça parte de uma comunidade que apoia seu crescimento e sucesso nesse mundão de códigos!</p>
      <div className="button-container">
        <button className="btn-contact">Entre em contato! </button>
      </div>
    </div>
  );
}

function App() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <AnimatedText onClick={scrollToAbout} />
      <AboutSectionPerson />
      <AboutSection />
    </div>
  );
}

export default App;
