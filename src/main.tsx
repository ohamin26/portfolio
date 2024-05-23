import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider component from the 'react-redux' package
import App from './App.tsx';
import { store } from './redux/store/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  //</React.StrictMode>,
);
