import * as actionType from './ActionTypes';

export const addBook = (data) => ({
  type: actionType.ADD_BOOK_REQUEST,
  payload: data
});

export const deleteBook = (id) => ({
  type: actionType.DELETE_BOOK_REQUEST,
  payload: id
});

export const editBook = (id, data) => ({
  type: actionType.EDIT_BOOK_REQUEST,
  payload: {
    id, data
  }
});

export const getBooks = (id, data) => ({
  type: actionType.GET_BOOKS_REQUEST,
  payload: {
    id, data
  }
});
