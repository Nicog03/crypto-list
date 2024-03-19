import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage';
import CurrencyPage from './pages/currency-page';
import Root from './pages/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ':currencyId',
        element: <CurrencyPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
