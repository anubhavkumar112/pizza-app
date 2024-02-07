import {IoMdClose} from 'react-icons/io'
import ItemCard from '../ItemCard/ItemCard'
import { useSelector } from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
const Cart = () => {
  const [activeCart,setActiveCart]=useState(false)
  const cartItems=useSelector((state)=>state.cart.cart)
  const totalQty=cartItems.reduce((total,item)=>total+item.qty,0)
  const totalAmount=cartItems.reduce((total,item)=>total+(item.qty*item.price),0)
  const navigate= useNavigate()
  return (
    <>
<div className={`fixed right-0 top-0 w-full p-5 lg:w-[20vw] h-full bg-white ${activeCart? "translate-x-0":"translate-x-full"} z-50` }>
<div className='flex justify-between items-center my-3'>
    <span className='text-xl font-bold text-grey-800'>My Order</span>
    <IoMdClose onClick={()=>{setActiveCart(!activeCart)}} className='border-2  border-grey-600 text-greay-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-l-red-300 cursor-pointer'/>
</div>


{ cartItems.length >0 ? (cartItems.map((food)=>{
  return (<ItemCard key={food.id}
                    img={food.img}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    qty={food.qty}

  />)
})): (<h1 className='text-center text-xl font-bold'>Your cart is empty</h1>)}




<div className='absolute bottom-0'>
    <h3 className='font-semibold text-grey-800'>Items : {totalQty} </h3>
    <h3 className='font-semibold text-grey-800'>Total Amount :{totalAmount} </h3>
    <hr className='w-[90vw] lg:[18vw] my-2' />
    <button onClick={()=>navigate('/success')} className='bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
</div>

</div>
<FaShoppingCart onClick={()=>{setActiveCart(!activeCart)}} className={`rounded-full bg-white text-5xl p-3 fixed bottom-10 right-5 ${totalQty>0&&"animate-bounce"}`}/>
    </>
  )
}

export default Cart