import { shopData } from "./shopData"

enum CART_ACTIONS {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  ADJUST_QUANTITY = "ADJUST_QUANTITY",
  LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM",
}

const INITIAL_STATE = {
  products: shopData,
  cart: [
    /* {
      id: 1,
      imagePath: "/boostersm.jpg",
      category: "Special Mix",
      title: "Booster Special Mix",
      oldPrice: "121",
      newPrice: "90",
      description: "Stimulates firmness and fullness of the saggy breasts.",
    },
    {
      id: 2,
      imagePath: "/booster xl.jpg",
      category: "Special Mix",
      title: "Booster XL",
      oldPrice: "121",
      newPrice: "90",
      description:
        "Stimulates firmness, fullness and increase in the size of the breast.",
    },
    {
      id: 3,
      imagePath: "/dawo da martaba.jpg",
      category: "Aphrodisiac",
      title: "Dawo da Martaba",
      oldPrice: "121",
      newPrice: "90",
      description: "Sexual stimulant to boost ones sex drive.",
    }, */
  ],
  currentItem: null,
}

export const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const item = state.products.find(
        (prod: any) => prod.id === action.payload.id
      )
      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false
      )

      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.id ? { ...item, qty: 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      }

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      }
    case CART_ACTIONS.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: action.payload.qty,
              }
            : item
        ),
      }
    case CART_ACTIONS.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }
    default:
      return state
  }
}
