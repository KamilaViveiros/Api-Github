import React from 'react';
import Card from '../components/Card';

const usersModel = ({ repo }) => (
  <div className="userModel">
    {repo.map((elem) =>
      <Card
        nomeProjeto={elem.name}
        staks={elem.stargazers_count}
        repositorio={elem.html_url}
      />)}
  </div>
);


export default usersModel;

