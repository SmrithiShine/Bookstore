
//Adding item to cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//Deleting the item from cart
export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
