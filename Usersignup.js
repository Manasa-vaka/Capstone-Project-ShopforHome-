import React from 'react';
import './style.css'

export default function Usersignup() {
  return (
    <>
    <form className='container form'>
    <div class="mb-3">
    <label for="userName" class="form-label">Name</label>
    <input type="text" class="form-control" id="userName"/>
  </div>
  <div class="mb-3">
    <label for="userAge" class="form-label">Age</label>
    <input type="number" class="form-control" id="userAge"/>
  </div>
  <div class="mb-3">
    <label for="userPhoneNo" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="userPhoneNo"/>
  </div>
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
