export const SET_ROLE = 'SET_ROLE';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export const setRole = (role) => ({ type: SET_ROLE, payload: role });
export const addTransaction = (transaction) => ({ type: ADD_TRANSACTION, payload: transaction });
export const deleteTransaction = (id) => ({ type: DELETE_TRANSACTION, payload: id });