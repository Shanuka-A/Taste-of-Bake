export const addToCart=(cake, quantity, varient)=> (dispatch, getState)=>{
   var cartItem ={
    name :cake.name,
    _id :cake._id,
    image : cake.image,
    varient : varient,
    quantity : Number(quantity),
    prices : cake.prices,
    price : cake.prices[0][varient]*quantity

   }

   if(cartItem.quantity>10)
   {
      alert('You cannot add more than 10 quantities')
   }

   else{
      if(cartItem.quantity<0)
      {
         dispatch({type:'DELETE_FROM_CART', payload:cake})
      }
      else{
         dispatch({type:'ADD_TO_CART', payload :cartItem})
      }
      
   }

   

   const cartItems = getState().cartReducer.cartItems

   localStorage.setItem('cartItems',JSON.stringify(cartItems))



}

export const deleteFromCart=(cake)=>(dispatch , getState)=>{

   dispatch({type:'DELETE_FROM_CART', payload:cake})
   const cartItems = getState().cartReducer.cartItems
   localStorage.setItem('cartItems', JSON.stringify(cartItems))
}