# Deck of Cards
A React.js web app to a deal a hand of cards from a deck until no more cards can be dealt.

Play now: https://jsfiddle.net/kn9n8Lwe/3/

## Approach
I began by creating an array of 52 cards to represent the "deck" for this simulation. This deck was then stored in the state in order to keep track of it from anywhere in the code. I would then select 5 cards randomly from this deck (using rand function) to generate a hand. As I selected a hand of cards, I would make sure to remove them from the deck in order to ensure we don't pick the same cards again. This hand of cards was also stored in the state to basically keep track of cards that have already been dealt so we can render this entire list of dealt cards.

Besides the deck of cards and hands dealt, I also kept track of error within the state. The reason I did this was so I could automatically disable the "deal new hand" button when there were not enough cards left to generate a new hand. This makes it clear to the user that the only option they now have is to shuffle the deck and begin again.

## Further Improvements
The following would be some starting points for further improving this react app.

### Testing
I did not include any unit tests in this project although in the ideal scenario we should write tests first, let them fail, and then build the app to pass the tests written in the first place (test driven development). It also helps ensure that if a component that was once working gets more code in it that it still expects as we originally wanted it to. The following would be some simple tests to add:

1. app renders
2. original deck is properly created (13 for each suit)
3. initial state is set properly when the app is first begun (deck is 52 cards, hand dealt is empty)
4. error is shown when there are not enough cards left to create a new hand
5. deal a hand button is disabled when there are not enough cards left to create a new hand
6. when shuffle is pressed the state is reset to original (deck is 52 cards, hand dealt is empty)
7. when a hand is dealt, those same cards are also removed from the deck
8. confirm that we are rendering all of the hands that have been dealt (based on increasing row #)

I would also test how this app looks and works in different browsers - I only used and tested in chrome.

### More Components
Components are at the heart of react. They allow you to focus on only that element and its logic. I tried to move things into their own  components in order to keep it simple to update later and also keep the main render function easy to read. 

Some more components I would consider creating would be a button component where a user can pass in whether it's disabled (which is set to default to false), the text on the button, and a handler for onclick. I also currently have a card component but ideally we could have a hand component which is made up with many of these card components.

### Resolve Console Warnings
The console is warning about children elements not having a unique key property. However, I did not see the value in this (even after researching this warning online) given the use of our app. Also, there wasn't much point in giving a random key property to children, such as the index of the card that is dealt.
