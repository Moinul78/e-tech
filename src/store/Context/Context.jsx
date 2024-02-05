import { proudctApi } from '@/services/Api';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import store from '../Store/store';

export default function Contexts({ children }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <ApiProvider api={proudctApi}> */}
        {children}
        {/* </ApiProvider> */}
      </Provider>
    </BrowserRouter>
  );
}