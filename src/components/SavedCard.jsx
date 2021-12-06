import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class SavedCard extends Component {
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
      deleteButton,
    } = this.props;

    return (
      <div className="saved-card">
        <h2 >{ cardName }</h2>
        <div className="image-container">
          <img id="cardImage" src={ cardImage } alt={ cardName } />
        </div>
        <div className="card-attribs">
          <p>{ cardDescription }</p>
          <p>{`Força: ${cardAttr1}`}</p>
          <p>{`Velocidade: ${cardAttr2}`}</p>
          <p>{`Defesa: ${cardAttr3}`}</p>
          <p>{ cardRare }</p>
          { cardTrunfo === true ? <p>Super Trunfo</p> : '' }
        </div>
        <button
          type="button"
          onClick={ deleteButton }
        >
          Excluir
        </button>
      </div>
    );
  }
}

SavedCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteButton: PropTypes.func.isRequired,
};
