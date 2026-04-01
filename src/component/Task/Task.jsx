import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const Task = ({ selectedCard, handleCompleteBtn }) => {

    return (
        <div className=''>
            {
                selectedCard.map(card => <TaskCard
                    card={card}
                    key={card.id}
                    handleCompleteBtn={handleCompleteBtn}
                ></TaskCard>)
            }
        </div>
    );
};

export default Task;