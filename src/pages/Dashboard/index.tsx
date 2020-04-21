import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Reposiitories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Reposiitories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/37094028?s=460&u=2046f770f89428370dc5cda95173aa3f088c9e73&v=4"
            alt="Diou Medeiros"
          />

          <div>
            <strong>rockectseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Reposiitories>
    </>
  )
}

export default Dashboard;
