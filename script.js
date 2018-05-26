const CARD_SUITS = [
  "Spades",
  "Hearts",
  "Diamonds",
  "Clubs"
];

const CARD_VALUES = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    
    // init state is always empty
    this.state = {
      unplayedCards: [], 
      allHands: [],
      cardShortage: false
    }
  }
  
  componentDidMount(){
  	this.makeNewDeck();
  }
  
  // create a new deck of cards
  makeNewDeck(){ 
      let deck = []; 
      
      for(let i = 0; i < CARD_SUITS.length; i++){
        for(let j = 0; j < CARD_VALUES.length; j++){
          deck.push({
            suit: CARD_SUITS[i],
            value: CARD_VALUES[j]
          });
        }
      }
      
      this.setState({unplayedCards: deck});
  }
  
  // creates new hand of 5 cards from the deck
  generateHand(){
  	  let length = this.state.unplayedCards.length;
      
      // return if there are insufficient cards remaining
      if(length < 5) {
      	this.setState({cardShortage: true}); 
        alert("Out of cards! Press shuffle to reset.");
        return;
      }
    	
      let newHand = [];
      let currUnplayedCards = this.state.unplayedCards; 
      
      for(let i = 0; i < 5; i++){
        // add random card from deck to this new hand
        let newCardIndex = Math.floor(Math.random()*length);
        let newCard = currUnplayedCards[newCardIndex];    
        newHand.push(newCard);
        
        // remove card from deck
        currUnplayedCards.splice(newCardIndex, 1);
        length--;
      }
      
      // update state with updated hand and deck
      this.setState({unplayedCards: currUnplayedCards});
      let curHands = this.state.allHands;
      curHands.push(newHand);        
      this.setState({allHands: curHands});
      
    }
    
    // reset the state and create a new deck
    resetAll(){
    	this.setState({cardShortage: false});
    	this.setState({allHands: []});
      this.setState({unplayedCards: []});
      this.makeNewDeck();
    }

  render() { 
    return (
      <div>
        <button disabled = {this.state.cardShortage} onClick = {() => this.generateHand()}> Deal a hand</button>
        <button onClick = {() => this.resetAll()}>Shuffle</button>
        {this.state.allHands.map((hand) => {
          return(<div className = "flex-container">
            {hand.map( (card) => {
                return (
                  <Card value = {card.value} suit = {card.suit} />
                );
              }
            )}
          </div>)
        })}
      </div>
    )
  }
};

class Card extends React.Component {
	render() {
  	return(
    	<div className = "card">
    	  <div className = "top-right-value">{this.props.value}</div>
        <div>{this.props.suit}</div>
        <div className = "bottom-left-value">{this.props.value}</div>
    	</div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.querySelector("#root")
);
