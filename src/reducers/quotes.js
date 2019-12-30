export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      return state.map(quote => {
        return quote.id === action.quoteId? {...quote, votes: quote.votes + 1}
        : quote
      })

    case "DOWNVOTE_QUOTE":
      let thisQuote = state.find(quote => quote.id === action.quoteId)
      if (thisQuote.votes > 0){
        return state.map(quote => {
          return quote === thisQuote ? {...quote, votes: quote.votes - 1}
          : quote
        })
      }
      return state

    default:
      return state
  }
  // return state;
}
