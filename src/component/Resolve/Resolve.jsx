import React from 'react';
import ResolvedCard from '../ResolvedCard/ResolvedCard';

const Resolve = ({completeBtn}) => {
    return (
        <div >
            {
                completeBtn.map(resolveData => <ResolvedCard resolveData={resolveData} key={resolveData.id}></ResolvedCard>)
            }
        </div>
    );
};

export default Resolve;