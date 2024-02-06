
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Component/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedcoffees = useLoaderData()
  const [coffees, setcoffees] = useState(loadedcoffees)
  return (
    <div className='m-20'>
      <div className='animation mx-auto'>
        <div className='animation1'>

        </div>
      </div>

      <div className='flex text-red-400 gap-6'>
        <Link to={'/addcoffee'}>Add Coffee</Link>
        <Link to={'/'}>home</Link>
      </div>
      <h1 className='text-5xl text-center'>All coffee:{coffees.length}</h1>
      <div className='grid gap-4 mt-10 grid-cols-3'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setcoffees={setcoffees} coffee={coffee}></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
