import React, {useEffect, useState} from 'react';
import Data from "./Data";
import icon1 from "./icons/delete.png";
import icon2 from "./icons/add.png";
import icon3 from "./icons/check.png";

function Students() {

    const [state, setState] = useState(Data);

    const handleRemoveItem = (index) => {

        useEffect(() => {

            let array = [...state]; // make a separate copy of the array
            array.splice(index, 1);
            setState(array);
        });
    };


    return (
        <div className="table">
            <div>
                <h2> Data Students </h2>
                <ul className='userListTitle'>
                    <li>id</li>
                    <li>name</li>
                    <li>position</li>
                    <li>office</li>
                    <li>age</li>
                    <li>date</li>
                    <li>salary</li>
                    <li> ---</li>
                </ul>
            </div>

            {Data.map((item, index) => (
                <div className='userList' key={index}>
                    <ul>
                        <li id={index}><input type="text" value={item.id + 1}/></li>
                        <li><input type="text" value={item.name}/></li>
                        <li><input type="text" value={item.position}/></li>
                        <li><input type="text" value={item.office}/></li>
                        <li><input type="text" value={item.age}/></li>
                        <li><input type="text" value={item.date}/></li>
                        <li><input type="text" value={item.salary}/></li>
                        <li>
                            {<div className='dataButton'>
                                <button className='btn' onClick={() => handleRemoveItem(index)}><img src={icon1}
                                                                                                     alt="img"/>
                                </button>
                                <button className='btn'><img src={icon2} alt="img"/></button>
                                <button className='btn'><img src={icon3} alt="img"/></button>
                            </div>}
                        </li>
                    </ul>
                </div>))}
        </div>
    );
}

export default Students


