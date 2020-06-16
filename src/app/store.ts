import rootReducer from './rootReducer'

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

const store = configureStore({
  reducer:
    rootReducer,
})

// export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>


// import setAuthToken from './utils/setAuthToken';

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

export default store
