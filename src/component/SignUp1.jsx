function SignUp1() {
    return (
      <div className="page-title">
        <div className="container mt-4">
          <div
            className="row justify-content-center "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body bg-dark text-light p-4">
                  <h2
                    className="card-title mb-4 text-center"
                    style={{
                      font: "30px",
                      fontFamily: "Raleway, Sans-serif",
                      color: "#5fcf80",
                      fontWeight: "bold",
                    }}
                  >
                    Create Account
                  </h2>
                  <form action="/signup" method="POST" noValidate="">
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        required=""
                      />
                      <div className="invalid-feedback">
                        First name is required.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Last name is required.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email.
                      </div>
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
                        placeholder="Enter password"
                        required=""
                      />
                      <div className="invalid-feedback">
                        Please provide a password.
                      </div>
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                        name="terms"
                        required=""
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the terms and conditions
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                    <div className="   text-center bg-dark ps-2">
                      <button
                        type="submit"
                        className=" rounded-pill p-2 border border-0  "
                        style={{
                          backgroundColor: "#5fcf80",
                          color: "#fff",
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SignUp1
