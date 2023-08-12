import React, {useState} from "react";

function Register() {
    const [state1,setState1]=useState("1")
    const [state2,setState2]=useState("2")

    const logState = () => {
        console.log(state1)
        console.log(state2)
      }


    return (
        <div className="col-md-6 m-5">
                 <div class="form-group">
                    <label for="exampleInputEmail1">آدرس ایمیل</label>
                    <input onChange={event =>setState1(  event.target.value)}  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">نام خانوادگی</label>
                    <input onChange={event =>setState2(  event.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={logState}   class="btn btn-primary">Register</button>
         </div>
    )
}

export default Register;