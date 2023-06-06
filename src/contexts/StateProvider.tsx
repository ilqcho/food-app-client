import React, { createContext, useReducer } from 'react';
import { State, Action, Product } from '../types';


const initialState: State = {
    basket: [],
    total: 0,
};


export const getBasketTotal = (basket: Product[]): number => {
    return basket.reduce((amount, item) => item.price * item.quantity + amount, 0);
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
        const existingProduct = state.basket.find(
            (item) => item.idMeal === action.payload.idMeal
        );

        if (existingProduct) {
            return {
            ...state,
            basket: state.basket.map((item) =>
                item.idMeal === action.payload.idMeal
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + action.payload.price,
            };
        }

        const newProduct = {
            ...action.payload,
            quantity: 1,
        };

        return {
            ...state,
            basket: [...state.basket, newProduct],
            total: state.total + newProduct.price,
        };
    case 'DELETE_FROM_BASKET':
        return {
            ...state,
            basket: state.basket.filter((item) => item !== action.payload),
            total: state.total - action.payload.price,
        };
    case 'INCREASE_QUANTITY':
        return {
            ...state,
            basket: state.basket.map((item) =>
            item.idMeal === action.payload.idMeal
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + action.payload.price,
        };
    case 'DECREASE_QUANTITY':
        return {
            ...state,
            basket: state.basket.map((item) =>
            item.idMeal === action.payload.idMeal && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            total: state.total - action.payload.price,
        };
    case 'RESET_BASKET':
        return {
            ...state,
            basket: [],
            total: 0,
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