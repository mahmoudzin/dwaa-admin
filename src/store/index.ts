import { configureStore } from "@reduxjs/toolkit";
import category from './category'
import group from './group'
import subCategory from './subcategory'
import brand from './brand'
import product from './product'
import report from './report'
import customer from './customer'
import user from './user'
import order from './order'
/**
 * const store = Redux.createStore(Redux.combineReducers({
   todos,
   goals,
}), Redux.applyMiddleware(checker));)
*/
export const store = configureStore({
    reducer: {
        category,
        group,
        subCategory,
        brand,
        product,
        report,
        customer,
        user,
        order
    },
    devTools: true
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;