import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen max-h-fit">
      <Header invert={true} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
