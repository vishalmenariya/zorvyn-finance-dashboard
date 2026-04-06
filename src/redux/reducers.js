import { SET_ROLE, ADD_TRANSACTION, DELETE_TRANSACTION } from './actions';
import { initialTransactions } from '../data/mockData';

const initialState = {
  role: 'VIEWER', 
  transactions: initialTransactions
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE:
      return { ...state, role: action.payload };
    case ADD_TRANSACTION:
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case DELETE_TRANSACTION:
      return { ...state, transactions: state.transactions.filter(t => t.id !== action.payload) };
    default:
      return state;
  }
};

export default rootReducer;