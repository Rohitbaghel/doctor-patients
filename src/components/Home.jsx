import React, {useState} from 'react'
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from './Navbar';

export const Home=() => {
    const [data, setData]=useState([]);
    const [page, setPage]=useState(1)
    const [size, setSize]=useState(0)
    const totalSize=async () => {
         const res=await fetch('http://localhost:2345/patient')
        const data= await res.json();
        // console.log(dat.length)
        setSize(data)
    }
    const appendedData=async () => {
        const res=await fetch(`http://localhost:2345/patient?page=${page}&size=${2}`)
        const dat= await res.json();
        // console.log(dat)
        setData(dat)
    }
    const filterByGender= async () => {
        const res=await fetch(`http://localhost:2345/patient/sort/sortbyGend?page=${page}&size=${2}`)
        const dat= await res.json();
        // console.log("sort by gender",dat) 
        setData(dat)
    }
    const filterByAge= async () => {
        const res=await fetch(`http://localhost:2345/patient/sort/sortbyAge?page=${page}&size=${2}`)
        const dat= await res.json();
        // console.log(dat?.[0]?.medicineId[0])
        setData(dat)
    }
    useEffect(() => {
        // appendedData()
        totalSize()
      }, [])
    
    useEffect(() => {
      appendedData()
    }, [page])
    useEffect( () => {
        filterByGender()
    }, [])
    useEffect( () => {
        filterByAge()
  },[page])
  return (
      <>
          <Navbar/>
          <h1 className='font-bold'>Patient Record</h1>
          <div className="flex mx-10">
              <div className="w-4/5 border-2 mr-1">
                  {data.map((e) => (
                    <Link to={`/home/${e._id}`}><div className='flex justify-evenly border-2 mb-2 bg-red-300' key={e._id}> 
                    
                          <div className="">
                              <p>Name</p>
                              <p>{e.name}</p>
                          </div>
                          <div className="">
                              <p>Age</p>
                              <p>{e.age}</p>
                          </div>
                          <div className="">
                              <p>Gender</p>
                              <p>{e.gender}</p>
                          </div>
                      </div>
                          </Link>
                  ))}
                      <div className='flex justify-center gap-12'>
                      <button className='border-2 w-12 rounded-lg font-bold bg-red-800' onClick={() => setPage(page-1)} disabled={page===1 ? true : false}>Prev</button>
                      <button className='border-2 w-12 rounded-lg font-bold bg-red-800' onClick={()=>setPage(page+1)} disabled={page===size.length-2 ? true : false}>Next</button> 
                      </div>
              </div>
              <div className="w-1/5 border-2">
                  <h1 className='font-bold'>Sorting by:</h1>
                  <button className='border-2 w-1/2 h-8 mt-3 text-xl  bg-yellow-500 rounded-sm ' onClick={()=>{filterByGender()}}>Gender</button><br />
                  <button className='border-2 w-1/2 h-8 mt-3 text-xl font-bold bg-yellow-500 rounded-sm '  onClick={()=>{filterByAge()}}>Age</button>
              </div>
          </div> 
      
      </>
  )
}
