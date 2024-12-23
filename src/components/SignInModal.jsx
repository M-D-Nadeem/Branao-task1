import React, { useState } from 'react';

const SignInModal = ({ show, onHide }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleMode = () => setIsSignIn(!isSignIn);

  return (
    <>
      {show && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <p className="w-100 text-center text-success mb-0">
                  Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 👋
                </p>
                <button type="button" className="btn-close" onClick={onHide}></button>
              </div>
              
              <div className="modal-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="m-0">{isSignIn ? 'Sign In' : 'Create Account'}</h4>
                  <p className="m-0 text-dark">
                    {isSignIn ? "Don't have an account yet? " : "Already have an account? "}
                    <button 
                      className="btn btn-link text-primary p-0 text-decoration-none"
                      onClick={toggleMode}
                    >
                      {isSignIn ? 'Create new for free!' : 'Sign In'}
                    </button>
                  </p>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6">
                    <form>
                      {!isSignIn && (
                        <div className="d-flex gap-2 mb-3">
                          <input
                            type="text"
                            className="form-control bg-light"
                            placeholder="First Name"
                          />
                          <input
                            type="text"
                            className="form-control bg-light"
                            placeholder="Last Name"
                          />
                        </div>
                      )}
                      
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control bg-light"
                          placeholder="Email"
                        />
                      </div>
                      
                      <div className="mb-3 position-relative">
                        <input
                          type="password"
                          className="form-control bg-light"
                          placeholder="Password"
                        />
                        <button 
                          className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-dark"
                          type="button"
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                      </div>
                      
                      {!isSignIn && (
                        <div className="mb-3 position-relative">
                          <input
                            type="password"
                            className="form-control bg-light"
                            placeholder="Confirm Password"
                          />
                          <button 
                            className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-dark"
                            type="button"
                          >
                            <i className="bi bi-eye"></i>
                          </button>
                        </div>
                      )}

                      <button 
                        type="submit" 
                        className="btn btn-primary w-100 rounded-pill mb-3"
                      >
                        {isSignIn ? 'Sign In' : 'Create Account'}
                      </button>

                      <button 
                        type="button" 
                        className="btn btn-outline-dark w-100 mb-2 d-flex align-items-center justify-content-center gap-2"
                      >
                        <img src="./images/facebook.png" alt="Facebook" />
                        Sign {isSignIn ? 'in' : 'up'} with Facebook
                      </button>

                      <button 
                        type="button" 
                        className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2"
                      >
                        <img src="./images/google.png" alt="Google" />
                        Sign {isSignIn ? 'in' : 'up'} with Google
                      </button>

                      {isSignIn && (
                        <div className="text-center mt-3">
                          <button className="btn btn-link text-dark text-decoration-none">
                            Forgot Password?
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                  
                  <div className="col-md-6 d-none d-md-block">
                    <img
                      src="./images/Auth.png"
                      alt="Sign up illustration"
                      className="img-fluid"
                    />
                  </div>
                </div>

                {!isSignIn && (
                  <p className="text-center small text-muted mt-3">
                    By signing up, you agree to our Terms & conditions, Privacy policy
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Backdrop with shadow only behind the modal */}
          <div
            className="modal-backdrop fade show"
            onClick={onHide}
          ></div>
        </div>
      )}
    </>
  );
};

export default SignInModal;
