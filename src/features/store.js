import { configureStore } from "@reduxjs/toolkit";

import { ClassApi } from "./ClassApi";
import { TeacherApi } from "./TeacherApi";


export const store = configureStore({
  reducer: {
    [ClassApi.reducerPath]: ClassApi.reducer,
    [TeacherApi.reducerPath]: TeacherApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    ClassApi.middleware,
    TeacherApi.middleware
  ]),
});