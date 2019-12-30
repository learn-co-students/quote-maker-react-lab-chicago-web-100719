import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  render() {
    let {removeQuote, upvoteQuote, downvoteQuote} = this.props
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => {
                return <QuoteCard quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: id => {dispatch(removeQuote(id))},
    upvoteQuote: id => {dispatch(upvoteQuote(id))},
    downvoteQuote: id => {dispatch(downvoteQuote(id))}
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
