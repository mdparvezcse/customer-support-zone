import { Suspense, useState } from 'react';
import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/navbar/Navbar'
import Customers from './component/Customers/Customers';
import { toast, ToastContainer} from 'react-toastify';

const customerPromise = fetch('../public/customer.json').then(res => res.json());

function App() {

  const [selectedCard, setSelectedCard] = useState([]);
  const [progressCount, setProgressCount] = useState(0);

  const handleSelectedCard = (customerCard) => {
    const newSelectedCard = ([...selectedCard,customerCard])
    setSelectedCard(newSelectedCard)
    toast('Clicking a card')
    setProgressCount(progressCount+1);
  }

  

  return (


    <div className='max-w-400 mx-auto bg-gray-200'>

      <Navbar></Navbar>
      <Banner 
      progressCount ={progressCount}
      ></Banner>

      <div className='lg:flex lg:mt-20 lg:px-24 mt-4'>

        <div className='lg:flex-3'>
          <h1 className='text-2xl font-semibold text-center lg:text-start mb-4'>Customer Tickets</h1>

          <Suspense fallback={<h3>Loading<span className="loading loading-dots loading-xl"></span></h3>}>
            <Customers 
            customerPromise={customerPromise}
            handleSelectedCard={handleSelectedCard}
            ></Customers>
          </Suspense>

        </div>

        <div className='lg:flex-1'>
          <h3>task</h3>
          <div>

          </div>
          <h2>resolved</h2>
          <div>

          </div>

        </div>

      </div>


      <ToastContainer></ToastContainer>
    </div>

  )
}

export default App
