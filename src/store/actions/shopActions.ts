enum CART_ACTIONS {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  ADJUST_QUANTITY = "ADJUST_QUANTITY",
  LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM",
}

export const AddToCart = (itemID, shirtColor) => {
  return dispatch => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: {
        id: itemID,
        color: shirtColor,
      },
    })
  }
}

export const RemoveFromCart = itemID => {
  return dispatch => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: {
        id: itemID,
      },
    })
  }
}

export const AdjustQuantity = (itemID, value) => {
  return dispatch => {
    dispatch({
      type: CART_ACTIONS.ADJUST_QUANTITY,
      payload: {
        id: itemID,
        qty: value,
      },
    })
  }
}

export const LoadCurrentItem = itemID => {
  return dispatch => {
    dispatch({
      type: CART_ACTIONS.LOAD_CURRENT_ITEM,
      payload: {
        id: itemID,
      },
    })
  }
}
