import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from  '@/components/footer/footer';
import { Header } from  '@/components/header/header';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return <div>
    <Header />
  <Component {...pageProps} />
  <Footer />
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
  </div>
  
}
