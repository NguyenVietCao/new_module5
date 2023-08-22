import React, { useState } from 'react';

function GreetingF(props) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const handleFirstNameChange = (event) => {
        setFirstName(event)
    }

    const handlelastNameChange = (event) => {
        setLastName(event)
    }
    return (
        <div>
            <input value={firstName} onChange={(event) => handleFirstNameChange(event.target.value)} />
            <br />
            <input value={lastName} onChange={(event) => handlelastNameChange(event.target.value)} />
            <p>
                Hello,{''}
                <span>
                    {firstName} {lastName}
                </span>
            </p>

        </div>
    );
}

export default GreetingF;
