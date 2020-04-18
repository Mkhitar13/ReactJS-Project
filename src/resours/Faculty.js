import React, {useState, useEffect} from 'react';

function Faculty() {
    const [count, setCount] = useState(13);
    
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="Faculty">
            <p>Счёт : {count}</p>
            <p>
                <button className='facultyButton' onClick={() => setCount(setCount => setCount - 1)}> - </button>
                <button className='facultyButton' onClick={() => setCount(setCount => setCount + 1)}> + </button>
            </p>
            <p>
                <button className='facultyButton' onClick={() => setCount(0)}>Сбросить</button>
            </p>
        </div>
    );
}

export default Faculty














































