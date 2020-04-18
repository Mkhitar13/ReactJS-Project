import React, { useState } from 'react';
import Data from "./Data";

function Group() {

    const [recipientID, setRecipientID] = useState(0);

    return (
        <div className='Group'>
            <select className='selectOption' value={recipientID} onChange={e => setRecipientID(Number(e.target.value))}>
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