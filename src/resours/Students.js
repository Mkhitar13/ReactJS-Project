import React, {useState} from 'react';
import Data from "./Data";
import icon1 from "./icons/delete.png";
import icon2 from "./icons/add.png";
import icon3 from "./icons/check.png";

function Students() {

    const [remove, setRemove] = useState(Data);

    const handleRemoveItem = (index) => {
        let array = [...remove];
        array.splice(index, 1);
        setRemove(array);
    };

    return (
        <div className="table">
            <div>
                <h2> Data Students </h2>
                <ul className='userListTitle'>
                    <li>Id</li>
                    <li>Name</li>
                    <li>Position</li>
                    <li>Office</li>
                    <li>Age</li>
                    <li>Date</li>
                    <li>Salary</li>
                    <li> </li>
                </ul>
            </div>

            {remove.map((item, index) => (
                <div className='userList' key={index}>
                    <ul>
                        <li id={index}><input type="text" value={ item.id } /></li>
                        <li><input type="text" value={ item.name } /></li>
                        <li><input type="text" value={ item.position } /></li>
                        <li><input type="text" value={ item.office } /></li>
                        <li><input type="text" value={ item.age } /></li>
                        <li><input type="text" value={item.date } /></li>
                        <li><input type="text" value={ item.salary }/></li>
                        <li>
                            {<div className='dataButton'>
                                <button className='btn' onClick={() => handleRemoveItem(index)}><img src={icon1} alt="img"/></button>
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

