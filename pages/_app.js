import Navbar from '../src/components/Navbar';
import '../styles/globals.css'
import Link from 'next/dist/client/link';

function MyApp({ Component, pageProps }) {
  return <>
  <header className='flex flex-wrap text-xl bg-black place-content-between sticky top-0 z-50'>
  <div className="flex flex-wrap items-center justify-between">
<span  className="ml-4 text-3xl text-green-400">SOF</span> <span className="ml-0 text-3xl text-white">SAFE</span>
  </div>
    <div className='place-content-end'>
    <Navbar />
    </div>
  </header>
    <Component {...pageProps} />
    <footer className='text-xl text-center text-gray-400'>© {new Date().getFullYear()} SofSafe.</footer>
  </>
}

export default MyApp;
