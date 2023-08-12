import React from "react";

function Register() {
    return (
<div className="col-md-6 m-5">
<form>
        <div class="form-group">
            <label for="exampleInputEmail1">آدرس ایمیل</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">نام خانوادگی</label>
            <input  class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</div>


    )
}

export default Register;