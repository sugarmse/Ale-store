import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  name:string,
  quantity:number,
  price?:number,
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    decreaseQuantity(state,action: PayloadAction<CartItem>){
      const actionItem = action.payload;
      const updatedItems = state.items.map((item)=> {
        if (item.name === actionItem.name && actionItem.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      state.items = updatedItems.filter(item => item.quantity > 0);
    }
  },
});

export const { addItem, removeItem, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
