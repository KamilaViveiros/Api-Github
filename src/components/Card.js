import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  render() {
    return (
   
        <div className="organization__div">
          <div className="project-name__div">
            <h1>{this.props.nomeProjeto}</h1>
          </div>

          <div>
            <p>Stars: {this.props.staks}</p>
            <a href={this.props.repositorio}>ACESSE AQUI</a>

          </div>
        </div>
   

    )
  }
};

export default Card;
