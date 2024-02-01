import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../App'

function Header() {
  const ctx = useContext(context);

  const quantity=ctx.cart?.reduce((acc,cv)=>acc+cv.quantity,0)

  return (
    <div className='flex justify-around items-center text-2xl h-12 bg-green-500'>
      <div>  <Link to={"/"}>Medicine Store</Link></div>
      <div className='flex gap-4 justify-between'>
      <Link to={"/store"}>Store</Link>
      <div
          className="flex text-lg sm:text-xl"
        >
          <p className=" border-2 rounded-md px-1 border-black ">cart </p>
          <sup className="text-black p-1">{quantity}</sup>{" "}
        </div>
      </div>
    </div>
  )
}

export default Header
