export const addToCart=(cake, quantity, varient)=> (dispatch, getState)=>{
   var cartItem ={
    name :cake.name,
    _id :cake.id,
    image : cake.image,
    varient : varient,
    quantity : quantity,
    prices : cake.prices,
    price : cake.prices[0][varient]*quantity

   }

   dispatch({type:'ADD_TO_CART', payload :cartItem})

   const cartItems = getState().cartReducer.cartItems

   localStorage.setItem('cartItems',JSON.stringify(cartItems))



}