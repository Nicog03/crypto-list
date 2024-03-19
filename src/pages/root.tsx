import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Root() {
  return (
    <>
      <Header invert={true} />
      <Outlet />
      <Footer />
    </>
  );
}
