import { Link } from "react-router-dom";
function Login1() {
  return (
    <>
      <div className="page-title">
        <div className="container mt-4">
          <div className="row justify-content-center align-items-center     ">
            <div className="col-md-6" data-aos="zoom-in-up">
              <div className="card shadow">
                <div className="card-body bg-dark text-light">
                  <h1
                    className="card-title text-center mb-4 fs-1"
                    style={{
                      font: "30px",
                      fontFamily: "Raleway, Sans-serif",
                      // backgroundColor: "#5fcf80",
                      color: "#5fcf80",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </h1>
                  <form action="/login" method="post">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Your  email"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required=""
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                        name="remember"
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </form>
                  <div className="text-center   p-3">
                    <div className="mb-2">
                      <button
                        type="submit"
                        className="rounded-pill p-2"
                        style={{
                          backgroundColor: "#5fcf80",
                          color: "#fff",
                          border: "none",
                        }}
                      >
                        <span className="px-3">Login</span>
                      </button>
                    </div>

                    <div className="  mt-3">
                      <Link to="#">Forgot Password?</Link> |
                      <Link to="/signUp" className="ms-2">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login1;
