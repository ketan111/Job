import React,{useState} from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';
const RestaurantCreate = () => {
    const [detail, setDetail] = useState(
        {
        name:null,
        email:null,
        rating:null,
        address:null
    }
)

    const handleChange =(e) =>{
       const name = e.target.name;
       const value = e.target.value;
       setDetail({
            ...detail,
            [name]:value
       });

    }
    const submitHandler = (e) =>{
        e.preventDefault();
    fetch('http://localhost:3000/restaurant',{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(detail)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log(result);
            })
        })
    }

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Restaurant Create</h2>
            <Container className="mt-5">
            <Row>
                <Col md={{offset: 5, }}>
                    <Form onSubmit={submitHandler}>
                        <input type="text" placeholder='Name' name="name" onChange={handleChange}></input><br /><br />
                        <input type="emal" placeholder='Email' name="email" onChange={handleChange}></input><br /><br />
                        <input type="text" placeholder='Rating' name="rating" onChange={handleChange}></input><br /><br />
                        <input type="text" placeholder='Address' name="address" onChange={handleChange}></input><br /><br />
                        <input type="submit" value="Submit" />
                    </Form>
                    </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default RestaurantCreate;