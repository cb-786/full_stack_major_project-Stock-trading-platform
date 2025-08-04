import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Handles the form submission.
   * It simulates an API call and then redirects to an external URL.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsLoading(true);

    const redirectUrl = 'https://68906bc8fd3c3c95479c48b5--dynamic-melomakarona-488ef8.netlify.app/';

    try {
      // Simulate an API call (e.g., sending data to your backend)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // If the "API call" is successful, redirect the user.
      // window.location.replace() is used to prevent the user from
      // coming back to this page with the browser's back button.
      console.log('Account created successfully! Redirecting...');
      window.location.replace(redirectUrl);

    } catch (error) {
      console.error("Failed to create account:", error);
      // If there was an error, you would handle it here,
      // for example, by showing an error message to the user.
      setIsLoading(false); // Stop the loading indicator on failure
    }
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet" />
      
      <div className="min-vh-100 bg-light position-relative">
        {/* Subtle background pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{opacity: 0.05}}>
          <div className="position-absolute border border-warning rounded-circle" style={{top: '10%', left: '10%', width: '8rem', height: '8rem'}}></div>
          <div className="position-absolute border border-warning rounded-circle" style={{top: '20%', right: '15%', width: '5rem', height: '5rem'}}></div>
          <div className="position-absolute border border-warning rounded-circle" style={{bottom: '20%', left: '25%', width: '6rem', height: '6rem'}}></div>
          <div className="position-absolute border border-warning rounded-circle" style={{bottom: '25%', right: '10%', width: '4rem', height: '4rem'}}></div>
        </div>

        <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center min-vh-100 py-5">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
              {/* Main signup card */}
              <div className="card shadow-lg border-0 rounded-3">
                <div className="card-body p-4 p-md-5">
                  
                  {/* Header */}
                  <div className="text-center mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-warning rounded-3 mb-3" style={{width: '4rem', height: '4rem'}}>
                      <User className="text-white" size={32} />
                    </div>
                    <h1 className="h3 fw-semibold text-dark mb-2">Create your account</h1>
                    <p className="text-muted mb-0">Start your trading journey with us</p>
                  </div>

                  {/* Social signup buttons */}
                  <div className="row g-2 mb-4">
                    <div className="col-12">
                      <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 py-2">
                        <Chrome size={20} />
                        Continue with Google
                      </button>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2 py-2">
                        <Github size={20} />
                        Continue with GitHub
                      </button>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="position-relative mb-4">
                    <hr className="text-muted" />
                    <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                      or continue with email
                    </span>
                  </div>

                  {/* Signup form */}
                  <form onSubmit={handleSubmit} className="row g-3">
                    
                    {/* Name field */}
                    <div className="col-12">
                      <div className="position-relative">
                        <User className="position-absolute top-50 translate-middle-y text-muted ms-3" size={20} />
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control ps-5 py-3 border-2"
                          style={{
                            borderColor: '#dee2e6',
                            transition: 'border-color 0.2s ease'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                          onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
                          required
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div className="col-12">
                      <div className="position-relative">
                        <Mail className="position-absolute top-50 translate-middle-y text-muted ms-3" size={20} />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control ps-5 py-3 border-2"
                          style={{
                            borderColor: '#dee2e6',
                            transition: 'border-color 0.2s ease'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                          onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
                          required
                        />
                      </div>
                    </div>

                    {/* Password field */}
                    <div className="col-12">
                      <div className="position-relative">
                        <Lock className="position-absolute top-50 translate-middle-y text-muted ms-3" size={20} />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="form-control ps-5 pe-5 py-3 border-2"
                          style={{
                            borderColor: '#dee2e6',
                            transition: 'border-color 0.2s ease'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                          onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="btn btn-link position-absolute top-50 end-0 translate-middle-y text-muted border-0 pe-3"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password field */}
                    <div className="col-12">
                      <div className="position-relative">
                        <Lock className="position-absolute top-50 translate-middle-y text-muted ms-3" size={20} />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="form-control ps-5 pe-5 py-3 border-2"
                          style={{
                            borderColor: '#dee2e6',
                            transition: 'border-color 0.2s ease'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#fd7e14'}
                          onBlur={(e) => e.target.style.borderColor = '#dee2e6'}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="btn btn-link position-absolute top-50 end-0 translate-middle-y text-muted border-0 pe-3"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>

                    {/* Terms and conditions */}
                    <div className="col-12 pt-2">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="terms"
                          className="form-check-input"
                          required
                        />
                        <label htmlFor="terms" className="form-check-label small text-muted">
                          I agree to the{' '}
                          <a href="#" className="text-warning text-decoration-none fw-medium">
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="#" className="text-warning text-decoration-none fw-medium">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>

                    {/* Submit button */}
                    <div className="col-12 pt-3">
                       <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-primary w-100 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                        style={{
                          backgroundColor: '#0d6efd',
                          borderColor: '#0d6efd',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {isLoading ? (
                          <div className="spinner-border spinner-border-sm text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          <>
                            Create Account
                            <ArrowRight size={20} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
