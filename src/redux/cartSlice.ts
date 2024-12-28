import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    products: any[]
}

const initialState: CartState = {
    products: [],
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) =>{
            state.products.push({...action.payload, qty: 1});
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            state.products = state.products.filter(product => action.payload.id !== product.id);
        },
        addProductQty: (state, action: PayloadAction<any>) => {
           const productIdx = state.products.findIndex(ob => ob.id === action.payload.id);
           if(productIdx !== undefined){
            state.products[productIdx].qty = state.products[productIdx].qty + 1;
           }
        },
        removeProductQty: (state, action: PayloadAction<any>) => {
            const productIdx = state.products.findIndex(ob => ob.id === action.payload.id);
            if(productIdx !== undefined){
             state.products[productIdx].qty = state.products[productIdx].qty - 1;
            }
         },
         resetCart : (state) => {
            state.products = [];
         },
    },
});

export const { addToCart, removeFromCart, addProductQty, removeProductQty, resetCart } = cartSlice.actions;

export default cartSlice.reducer;


