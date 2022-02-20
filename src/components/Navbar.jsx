import React from 'react'

export const Navbar = () => {
  return (
      <>
          <div className="">
              <div className="flex justify-between border-2 " style={{backgroundColor:'#11857E'}}>
                  <div className="mr-3">
                      <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="" className="object-contain h-12" />
                  </div>
                  <div className="w-3/4 mx-4">
                      
                      <input type="text" name="" id="" className="w-5/6 mt-3 h-7" />
                      <button className='text-md  border-2 text-justify font-bold text-white ml-1'>submit</button>
                  </div>
                  <div className="ml-3 mt-2">

                          <div>Login</div>
                      
                  </div>
              </div>
      </div>
      
      </>
  )
}
