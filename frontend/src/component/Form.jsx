import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
  });
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("http://localhost:3000/api/v1/medicine", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
     await res.json();
    setLoading(false);
    navigate('/store');
  };

  return (
    <div className='flex justify-center items-center h-full'>
      <form onSubmit={handleSubmit} className='flex-col flex justify-center items-center gap-4 bg-sky-200 p-4 rounded-md'>
        <div className='text-2xl '>Add Medicine</div>
        <div className='flex gap-4'>
          <input className='rounded-full p-2 px-4 w-72'
            value={formData.name}
            type="text"
            name="name"
            id='name'
            onChange={handleChange}
            placeholder='name...'

          />
        </div>
        <div>
          <input className='rounded-full p-2 px-4 w-72'
            value={formData.description}
            onChange={handleChange}
            id='description'
            type="text"
            name="description"
            placeholder='description...'
          />
        </div>
        <div>
          <input className='rounded-full p-2 px-4 w-72'
            placeholder='price...'
            value={formData.price}
            onChange={handleChange}
            type="text"
            id='price'
            name="price"
          />
        </div>
        <div>
          <input className='rounded-full p-2 px-4 w-72'
            placeholder='stock...'
            value={formData.stock}
            onChange={handleChange}
            type="text"
            id='stock'
            name="stock"
          />
        </div>
        <button type="submit" className='rounded-md bg-green-500 p-2'>{loading ? "Adding":"Add MED" }</button>
      </form>
    </div>
  );
}

export default Form;
