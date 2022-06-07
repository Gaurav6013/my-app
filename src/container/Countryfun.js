import React, {useState} from 'react';

function Countryfun(props) {
   const [CountryName,setCountryName] = useState('india');
   const Changecountry = () => {
        setCountryName('UK')
   }


    return (
        <div>
            <p>{CountryName}</p>
            <button onClick={ () => Changecountry()}>Change</button>
        </div>
    
    );
}

export default Countryfun;