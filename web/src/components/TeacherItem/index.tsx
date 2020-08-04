import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/45287391?s=460&v=4" alt="Teste"/>
        <div>
          <strong>Teste</strong>
          <span>Quimica</span>
        </div>
      </header>
      
      <p>
        Teste Teste Teste
        <br /> <br />
        Teste Teste Teste
      </p>
      
      <footer>
        <p>Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;