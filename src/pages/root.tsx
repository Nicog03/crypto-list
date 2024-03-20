import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen max-h-fit sm:text-lg xl:max-w-[1426px] 2xl:max-w-[1526px] mx-auto">
      <Header />
      <div className="flex-grow flex">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
