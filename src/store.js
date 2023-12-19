import { configureStore, createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    itemsCart: []
  },
  reducers: {
    addToCart: (state, actions) => {
      if(!state.itemsCart.find((item)=> item.id === actions.payload.id)){
        state.itemsCart = [...state.itemsCart, {id: actions.payload.id, count: 1}]
      }
      else{
        state.itemsCart = state.itemsCart.map((item)=>{
          if(item.id === actions.payload.id)
            return {...item, count: item.count + 1}
          else 
            return item
        })
      }
    },
    decreaseItemCart: (state, actions) => {
      state.itemsCart.map((item) => {
        if (item.id === actions.payload.id){
          if(item.count > 1){
            state.itemsCart = state.itemsCart.map((item) => {
              if (item.id === actions.payload.id)
                return {...item , count: item.count-1}
              else return item
            })
          }
          else{
            state.itemsCart = state.itemsCart.filter((item) => item.id !== actions.payload.id)
          }
        }
      })
    },
    removeFromCart: (state, actions) => {
      state.itemsCart = state.itemsCart.filter((item) => item.id !== actions.payload.id)
    },
  },
})

export const { addToCart, decreaseItemCart, removeFromCart } = cartSlice.actions

export default configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
})