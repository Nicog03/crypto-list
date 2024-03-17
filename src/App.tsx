import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage';
import CurrencyPage from './pages/currency-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: ':currencyName',
    element: <CurrencyPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
