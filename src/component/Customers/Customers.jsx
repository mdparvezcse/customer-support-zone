import React, { use } from 'react';
import Customer from '../Customer/Customer';

const Customers = ({ customerPromise, handleSelectedCard}) => {
    const customers = use(customerPromise);

    return (
        <div >
            <div className='flex flex-col gap-3 p-1 lg:grid lg:grid-cols-2 lg:gap-4 '>
                {
                    customers.map(customer => <Customer
                        customer={customer}
                        key={customer.id}
                        handleSelectedCard={handleSelectedCard}
                    ></Customer>)
                }
            </div>

        </div>
    );
};

export default Customers;