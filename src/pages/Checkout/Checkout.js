import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext';

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

     const handlePlaceOrder = event =>{
        event.preventDefault();

        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Order placed successfully")
                form.reset();
            }
        })
        .catch(error => console.error(error))
     }
  return (
    <div className='my-20'>
        <form onSubmit={handlePlaceOrder}>
            <h2 className='text-4xl'>You are about to order: {title}</h2>
            <h4 className='text-3xl'>Price : {price}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" required />
        <input name="lastName" type="text" placeholder="Last name" className="input input-bordered w-full" required />
        <input name="phone" type="text" placeholder="Your phone" className="input input-bordered w-full" required />
        <input name="email" type="text" defaultValue={user?.email} className="input input-bordered w-full" required />
            </div>
            <textarea name="message" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your message"></textarea>
            <input className='btn btn-primary' type="submit" value="Placed to Order" />
        </form>
        <Link to='/orders'><button className="btn btn-secondary my-5">Go to Orders</button> </Link>
    </div>
  )
}

export default Checkout