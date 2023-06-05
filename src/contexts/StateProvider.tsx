import React, { createContext, useReducer } from 'react';
import { State, Action } from '../types';

const initialState: State = {
  basket: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
        return {
            ...state,
            basket: [...state.basket, action.payload],
        };
    case 'DELETE_FROM_BASKET':
        return {
          ...state,
          basket: state.basket.filter((item) => item !== action.payload),
        };
    default:
      return state;
  }
};

export const StateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};