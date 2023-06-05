// StateProvider.tsx

import React, { createContext, useReducer } from 'react';
import { State, Action } from '../types';

// Define el estado inicial
const initialState: State = {
  basket: [],
};

// Define los reducers para manipular el estado
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    // Otros casos de acción si es necesario
    default:
      return state;
  }
};

// Crea el contexto para el StateProvider
export const StateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Define el componente StateProvider
export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};