import { Suspense, useState } from 'react';
import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/navbar/Navbar'
import Customers from './component/Customers/Customers';
import { toast, ToastContainer} from 'react-toastify';
import Task from './component/Task/Task';
import Resolve from './component/Resolve/Resolve';

const customerPromise = fetch('../public/customer.json').then(res => res.json());

function App() {

  const [selectedCard, setSelectedCard] = useState([]);
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [completeBtn, setCompleteBtn] = useState([]);

  const handleSelectedCard = (customerCard) => {
    const newSelectedCard = ([...selectedCard,customerCard])
    setSelectedCard(newSelectedCard)
    setProgressCount(progressCount+1);
    toast('Clicking A Card')

  }

  const handleCompleteBtn = (card) => {
    const completeDataRemove = ([...completeBtn, card])
    const remainingSelectedCard = selectedCard.filter(data => data.id !== card.id);
    setResolvedCount(resolvedCount+1);
    setProgressCount(progressCount-1);
    setCompleteBtn(completeDataRemove);
    setSelectedCard(remainingSelectedCard);
    toast('Clicking Complete Button')
  }

  

  return (


    <div className='max-w-400 mx-auto bg-gray-200'>

      <Navbar></Navbar>
      <Banner 
      progressCount ={progressCount}
      resolvedCount={resolvedCount}
      ></Banner>

      <div className='lg:flex lg:mt-20 lg:px-24 mt-4 lg:gap-3'>

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
          <h3 className='text-2xl font-semibold text-center lg:text-start mb-4'>Task Status</h3>
          <div>
            <Task selectedCard={selectedCard} handleCompleteBtn={handleCompleteBtn}></Task>
          </div>
          <h2 className='text-2xl font-semibold text-center lg:text-start mb-4'>Resolved</h2>
          <div>
            <Resolve completeBtn={completeBtn}></Resolve>
          </div>

        </div>

      </div>


      <ToastContainer></ToastContainer>
    </div>

  )
}

export default App
