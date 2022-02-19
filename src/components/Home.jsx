import React, {useState} from 'react'
import {useEffect} from 'react';

export const Home=() => {
    const [data, setData]=useState([]);
    const appendedData=async () => {
        const res=await fetch('http://localhost:2345/patient')
        const dat= await res.json();
        console.log(dat?.[0]?.medicineId[0])
        setData(dat)
    }
    const filterByGender= async () => {
        const res=await fetch('http://localhost:2345/patient/sortbyGend')
        const dat= await res.json();
        console.log(dat?.[0]?.medicineId[0])
        setData(dat)
    }
    const filterByAge= async () => {
        const res=await fetch('http://localhost:2345/patient/sortbyAge')
        const dat= await res.json();
        console.log(dat?.[0]?.medicineId[0])
        setData(dat)
    }
    
    useEffect(() => {
      appendedData()
    }, [])
    useEffect( () => {
        filterByGender()
    }, [])
    useEffect( () => {
        filterByAge()
  },[])
  return (
      <>
          <h1 className='font-bold'>Patient Record</h1>
          <div className="flex">
              <div className="w-4/5 border-2 mr-1">
                  {data.map((e) => (
                      <div className='flex justify-between border-2 mb-2' key={e._id}>
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
                          <div className="">
                              <p>Medicine1</p>
                              <p>Name:{e?.medicineId[0]?.name}</p>
                              <p>Quantity:{e?.medicineId[0]?.quantity}</p>
                          </div>
                          <div className="">
                              <p>Medicine1</p>
                              <p>Name:{e?.medicineId[1]?.name}</p>
                              <p>Quantity:{e?.medicineId[1]?.quantity}</p>
                          </div>
                          <div className="">
                              <p>Medicine1</p>
                              <p>Name:{e?.medicineId[2]?.name}</p>
                              <p>Quantity:{e?.medicineId[2]?.quantity}</p>
                          </div>
                          <div className="">
                              <p>Medicine1</p>
                              <p>Name:{e?.medicineId[3]?.name}</p>
                              <p>Quantity:{e?.medicineId[3]?.quantity}</p>
                          </div>
                        
                      </div>
               ))}
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
