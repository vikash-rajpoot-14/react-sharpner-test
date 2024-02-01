import React, { useContext } from 'react'
import { context } from '../App'

function Cart() {
    const ctx = useContext(context);
    
  return (
     <div className='flex justify-center mt-8'>
        <table className='w-2/3 border-collapse'>
          <thead>
            <tr className='bg-sky-200'>
              <th className='py-2 px-4 border'>Name</th>
              <th className='py-2 px-4 border'>Description</th>
              <th className='py-2 px-4 border'>Price</th>
              <th className='py-2 px-4 border'>quantity</th>
            </tr>
          </thead>
          <tbody>
            {ctx.cart?.map((item) => (
              <tr key={item._id} className='border'>
                <td className='py-2 px-4 border'>{item.name}</td>
                <td className='py-2 px-4 border'>{item.description}</td>
                <td className='py-2 px-4 border'>{item.price}</td>
                <td className='py-2 px-4 border'>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Cart
