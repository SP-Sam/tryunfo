import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card-half">
        <div className="card">
          <h2>
            {cardName
              ? cardName
              : 'Nome do personagem'}
          </h2>
          <div className="image-container">
            {cardImage
              ? <img id="cardImage" src={ cardImage } alt={ cardName } />
              : 'Image do personagem'}
          </div>
          <div className="card-attribs">
            <p>
              {cardDescription
                ? cardDescription
                : 'Descrição curta do personagem'}
            </p>
            <p>
              Força: <b>
                {cardAttr1
                  ? cardAttr1
                  : 0}
                </b>
            </p>
            <p>
              Velocidade: <b>
                {cardAttr2
                  ? cardAttr2
                  : 0}
                </b>
            </p>
            <p>
              Defesa: <b>
                {cardAttr3
                  ? cardAttr3
                  : 0}
              </b>
            </p>
            <p>{cardRare}</p>
            { cardTrunfo === true ? <p>Super Trunfo</p> : null }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
