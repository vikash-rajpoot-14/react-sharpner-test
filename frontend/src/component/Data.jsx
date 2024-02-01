import React, { useContext, useEffect, useState } from 'react';
import { context } from '../App';

function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const ctx = useContext(context)
  console.log(ctx.cart)

  const handleCart = async (e, id) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch(`http://localhost:3000/api/v1/medicine/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update stock');
      }
  
      const res = await response.json();
      const data = res.data;
      ctx.setCart((prev)=>{
        data.quantity = 1;
        let flag = false;
        prev.forEach(item => {
            if (item.id === data.id) {
                flag = true;
                item.quantity += 1;
            }
        })
        if (!flag) {
            return [...prev, data]
        }else{
             return [...prev]
        }
    })
      setData((prev) =>
        prev.map((item) => (item._id === id ? { ...item, stock: item.stock - 1 } : item))
      );
    } catch (error) {
      console.error('Error updating stock:', error.message);
    } finally {
      setLoading(false);
    }
  };
  
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/medicine');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const data = await response.json();
        setData(data?.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle error scenarios if needed
      } finally {
        setLoading(false);
      }
    }
  
    fetchData();
  }, []);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/medicine');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setData(data?.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle error scenarios if needed
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='flex justify-center mt-8'>
        <table className='w-2/3 border-collapse'>
          <thead>
            <tr className='bg-sky-200'>
              <th className='py-2 px-4 border'>Name</th>
              <th className='py-2 px-4 border'>Description</th>
              <th className='py-2 px-4 border'>Price</th>
              <th className='py-2 px-4 border'>Stock</th>
              <th className='py-2 px-4 border'>Changes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className='border'>
                <td className='py-2 px-4 border'>{item.name}</td>
                <td className='py-2 px-4 border'>{item.description}</td>
                <td className='py-2 px-4 border'>{item.price}</td>
                <td className='py-2 px-4 border'>{item.stock <= 0 ? "Out Of stock":item.stock}</td>
                <td className='py-2 px-4 border'>
                  <button onClick={(e) => handleCart(e,item._id)} className='bg-green-500 hover:bg-green-300 rounded-md w-28 p-2'>
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default Data;
