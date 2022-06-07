import React, { useState } from 'react';

function InDbtn(props) {
    const [count, setCount] = useState(0);



    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => count < 10 ? setCount(count + 1):null}><h3>Increse (+)</h3></button>
            <button onClick={() => count > -10 ? setCount(count - 1):null}><h3>Decrese (-)</h3></button>
        </div>
    );
}

export default InDbtn;