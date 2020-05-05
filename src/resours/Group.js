import React, { useState } from 'react';
import Data from "./Data";

function Group() {

    const [recipientID, setRecipientID] = useState('');

    return (
        <div className='Group'>
            <select className='selectOption' value={recipientID} onChange={e => setRecipientID(String(e.target.value))}>
                {Data.map(friend => (
                    <option key={friend.id} value={friend.id}>
                        {friend.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default Group;