import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistedStore from './redux/store';
import App from 'components/App';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={persistedStore.store}>
      <PersistGate loading={null} persistor={persistedStore.persist}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
