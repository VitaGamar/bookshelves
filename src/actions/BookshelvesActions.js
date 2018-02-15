import * as actionType from './ActionTypes';

export const addBookshelf = (data) => ({
  type: actionType.ADD_BOOKSHELF_REQUEST,
  payload: data
});

export const removeBookshelf = (id) => ({
  type: actionType.DELETE_BOOKSHELF_REQUEST,
  payload: id
});

export const editBookshelf = (id, data) => ({
  type: actionType.EDIT_BOOKSHELF_REQUEST,
  payload: {
    id, data
  }
});

export const getBookshelves = () => ({
  type: actionType.GET_BOOKSHELVES_REQUEST,
  payload: {
    id, data
  }
});
