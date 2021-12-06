import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';
import './components/card-form.css';
import './components/card.css';

import Form from './components/Form';
import SavedCard from './components/SavedCard';

export default class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.verifyTrunfo = this.verifyTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardInfos: [],
    };
  }

  handleChange({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [id]: value,
    }, () => this.validation());
  }

  validation() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const min = 0;
    const max = 90;
    const sumMax = 210;

    const empty = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0;

    const attr = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const attrLimits = attr.every((att) => att >= min && att <= max);

    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const sumLimit = sum <= sumMax;

    const result = empty && attrLimits && sumLimit;

    if (result) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  saveCard() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardInfos,
      cardTrunfo,
    } = this.state;

    const infos = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    const result = cardInfos.concat(infos);

    this.setState({
      cardInfos: [...result],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
    }, () => this.verifyTrunfo());
  }

  verifyTrunfo() {
    const { cardTrunfo } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
  }

  deleteCard(cardName, cardTrunfo) {
    const { cardInfos } = this.state;
    const newInfos = cardInfos.filter((card) => card.cardName !== cardName);

    if (cardTrunfo) {
      this.setState({
        cardInfos: newInfos,
        hasTrunfo: false,
      });
    } else {
      this.setState({
        cardInfos: newInfos,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardInfos,
    } = this.state;

    return (
      <div className="App">
        <div className="creating-card">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.saveCard }
            onInputChange={ this.handleChange }
          />

          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChange }
          />
        </div>
        <div className="created-cards">
          <div className="cards">
            {cardInfos.map((card) => (
              <div key={ card.cardName }>
                <SavedCard
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardImage={ card.cardImage }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  deleteButton={ () => this.deleteCard(card.cardName, card.cardTrunfo) }
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}
