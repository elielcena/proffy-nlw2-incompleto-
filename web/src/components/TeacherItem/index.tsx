import React from 'react';

import api from '../../services/api';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
    id: number;
    subject: string;
    cost: number;
    user_id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const  TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      
      <p>
        {teacher.bio}
      </p>
      
      <footer>
        <p>Preço/hora
          <strong>R$ {parseFloat(teacher.cost.toString()).toFixed(2)}</strong>
        </p>
        <a onClick={createNewConnection} target="_blank" href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsAppIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;