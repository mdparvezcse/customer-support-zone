import { Suspense } from 'react';
import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/navbar/Navbar'
import Customers from './component/Customers/Customers';


const customerPromise = fetch('../public/customer.json').then(res => res.json());

function App() {


  return (
  

    <div className='max-w-400 mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense fallback={<h3>Loading<span className="loading loading-dots loading-xl"></span></h3>}>
          <Customers customerPromise={customerPromise}></Customers>
        </Suspense>


    </div>    
  )
}

export default App
