import React, { Component } from 'react'
import axios from 'axios'

const API_URL="https://deckofcardsapi.com/api/deck/new/shuffle";

class Deck extends Component {
    constructor(props){
        super(props);
        this.state={deck:null};
        this.getCard=this.getCard.bind(this);
    }

    async componentDidMount()
    {
        let deck= await axios.get(API_URL);
        this.setState({deck:deck.data})
    }
    getCard(){


    }
  render() {
    return (
      <div>
        <h1>
        Card Dealer
        </h1>
        <button onClick={this.getCard}>Get Card!</button>
        </div>
    )
  }
}
export default Deck;
