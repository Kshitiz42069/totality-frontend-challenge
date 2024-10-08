import React from 'react'

function Login() {
  return (
    <div className="relative flex items-center justify-center h-[90vh] overflow-hidden"
    //   style={{
    //     backgroundImage: "url(https://i.pinimg.com/564x/3e/69/3f/3e693fdb89b156cdf33b28b3856302df.jpg)",
    //     backgroundSize: "cover", // Ensures the image covers the entire container
    //   backgroundRepeat: "no-repeat", // Prevents the image from repeating
    //   backgroundPosition: "center",
    //   }}
    >
      <img className='absolute' src={require('../../assets/images/login.jpg')} alt="" />
      <div className="hero bg-white w-1/2 h-[60vh] bg-opacity-70 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse bg-white bg-opacity-80">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">Sign Up?!</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-white hover:text-black">
                  { "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login