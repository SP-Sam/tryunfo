import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="card-form" action="">
        <h2>Adicionar nova carta</h2>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <textarea
            name=""
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          <div className="card-atrib">
            Força ...........
            <input
              type="number"
              name=""
              id="cardAttr1"
              className="card-atrib-1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </div>
        </label>

        <label htmlFor="cardAttr2">
          <div className="card-atrib">
            Velocidade .
            <input
              type="number"
              name=""
              id="cardAttr2"
              className="card-atrib-2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </div>
        </label>

        <label htmlFor="cardAttr3">
          <div className="card-atrib">
            Defesa ........
            <input
              type="number"
              name=""
              id="cardAttr3"
              className="card-atrib-3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </div>
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input
            type="text"
            className="card-image"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare">
          Raridade
          <select
            name=""
            className="card-rarity"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          {!hasTrunfo
            ? (
              <div className="super-trunfo">
                <input
                  type="checkbox"
                  name=""
                  id="cardTrunfo"
                  className="super-trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trunfo
              </div>
            )
            : (
              <p>Você já tem um Super Trunfo em seu baralho</p>
            )}
        </label>

        <button
          type="button"
          className="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
