import React, {useState, useEffect} from 'react'


const Profile = () =>{
   const[user, setUser] = useState([]);

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((resp)=>{
        (resp.json()).then((result)=>{
            
            setUser(result);
        })
    })
   },[]);
   

    return (<div>
        <table class="table table-success table-striped">
        <thead>
            <tr>
            
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
            </thead>
            
        <tbody>
        {user.map((item,index)=>{
           return <>
               <tr class="table-primary">
                <td class="table-primary">{item.id}</td>
                <td class="table-primary">{item.name}</td>
                <td class="table-primary">{item.email}</td>
                </tr>
               
                </>
        })}
        </tbody>
        </table>
       
    </div>)
}

export default Profile;