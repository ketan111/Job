import React,{useState} from 'react';
import {Container, Row, Col,Table} from 'react-bootstrap'

const RestaurantSerch = () => {

    const [search, setSearch]= useState(null)

    const searchHandler = (key)=>{
       
        fetch('http://localhost:3000/restaurant?q='+ key).then((data)=>{
            data.json().then((resp)=>{
                console.log('resp', resp)
                if(resp.length>0){
                    setSearch(resp)
                }else{
                    console.log("No Data Found")
                }
                console.log(search)
            })
        })
    }
    return (
        <div>
            <h2 style={{textAlign:'center'}}>Restaurant Serch</h2>
            <Container className="mt-5">
            <Row>
                <Col md={{offset: 5, }}>
                <input type="search" onChange={searchHandler} />
                
                {
                    search ? search.map((item)=>{
                       return <div>
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
          <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.rating}</td>
                        <td>{item.email}</td>
                        
                    </tr>
                    </tbody>
                    </Table>
                       </div> 
                    })
                    :
                    null
                }
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default RestaurantSerch;