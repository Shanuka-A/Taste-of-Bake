import React from 'react'

export default function RegisterPg() {
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-left'>
                <h2 className='text-center m-2'>Register</h2>
                <div>
                    <input type='text' placeholder='name' className='form-control'/>
                    <input type='text' placeholder='email' className='form-control'/>
                    <input type='text' placeholder='password' className='form-control'/>
                    <input type='text' placeholder='confirm password' className='form-control'/>
                    <button className='btn mt-5'>REGISTER</button>
                </div>
            </div>
        </div>
    </div>
  )
}
