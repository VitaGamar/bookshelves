import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookshelvesActions } from '../actions';
import { bindActionCreators } from 'redux';
import { getBookshelves } from './../selectors/bookshelvesSelector';

export class BooksPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {bookshelves} =this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookshelves: getBookshelves(state)
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(bookshelvesActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
