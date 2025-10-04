"use client"

import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import type { CartItem, Product, Size } from '@/lib/types';
import { useToast } from './use-toast';

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; size: Size, image: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Product, size: Size, image: string) => void;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, image } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id.startsWith(product.id) && item.size === size
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
        return { ...state, items: newItems };
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${size}-${Date.now()}`,
          name: product.name,
          price: product.price,
          image,
          size,
          quantity: 1,
        };
        return { ...state, items: [...state.items, newItem] };
      }
    }
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { toast } = useToast();
  
  const addToCart = (product: Product, size: Size, image: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, size, image } });
    toast({
      title: "Added to bag",
      description: `${product.name} (${size}) has been added to your bag.`,
    });
  };

  return (
    <CartContext.Provider value={{ state, dispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
