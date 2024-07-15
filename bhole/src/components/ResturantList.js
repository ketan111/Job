import React,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function ResturantList() {
const [list, setList] = useState([]);

const fetchData = ()=>{
    fetch('http://localhost:3000/restaurant').then((resp)=>{
        resp.json().then((result)=>{
            setList(result);
        })
    })
}
useEffect(()=>{
    fetchData()
},[])

const deleteHandler =(id) =>{
    
    fetch(`http://localhost:3000/restaurant/${id}`, {
        method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(result => {
        console.log('Delete successful:', result);
        // You might want to handle success feedback here
        fetchData()
    })
    .catch(error => console.error('Error updating data:', error));
}
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Resturant List</h2>
            <Table striped bordered hover>
           
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Email</th>
                    <th>Operation</th>
                </tr>
                </thead>
               <tbody>

            {
                
                list.map((item)=>{
                    return (
                    <>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.rating}</td>
                        <td>{item.email}</td>
                        <td><Link to={`/update/${item.id}`}>Edit</Link> &nbsp;
                          <span onClick={()=> deleteHandler(item.id)}>Delete</span>
                        </td>
                    </tr>
                    </>
                    )
                })
            }
            </tbody>
            </Table>
        </div>
    );
}

export default ResturantList;