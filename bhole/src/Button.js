import React, {useState} from 'react';

const Button = ({value}) =>{
const [data, setData] = useState(null);
const dataHandler = () => {
    setData('X');
}
    return <button className="square" onClick={dataHandler}>{data}</button>;
}
export default Button;