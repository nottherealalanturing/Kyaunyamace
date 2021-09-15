import { combineReducers } from "redux"
import { ShopReducer } from "./shopReducer"

export const rootReducer = combineReducers({
  shop: ShopReducer,
})
