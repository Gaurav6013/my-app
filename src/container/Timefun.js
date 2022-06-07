import React, { useEffect ,useState } from 'react';

function Timefun(props) {
    const [time, setTime] = useState(new Date());
    
    const tick = () => {
        setTime(new Date());
    }
     //lifecycle hook
    useEffect(() => {
        //comentDidMount, comentDidMount
        const timeI=setInterval(() => tick(),1000);

        //comentwillUnMount
         return () => { 
             clearInterval(timeI);
         }
    }, [time])

    return (
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Timefun;