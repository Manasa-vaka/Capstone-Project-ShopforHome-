import React from 'react'

export default function Usersignin() {
  return (
    <>
     <form className='container form'>
  <div class="mb-3">
    <label for="userEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="userPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="userPassword"/>
  </div>  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>   
    </>
  )
}
