import React, { use } from 'react';

const Customers = ({customerPromise}) => {
    const customers = use(customerPromise);
    console.log(customers)
    return (
        <div>
            
        </div>
    );
};

export default Customers;