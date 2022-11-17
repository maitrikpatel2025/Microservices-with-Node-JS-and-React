import styles from './signup.module.css'
const signup = () => {
  return (
    <div>
      <form>
        <div className={styles.container}>
        <div className="row mb-4">
          <h2 className="col d-flex justify-content-center">
                CREATE AN ACCOUNT
          </h2>
        </div>
        <div className="form-group">
          <label className="form-label" for="form2Example1">
            Email
          </label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label" for="form2Example2">
            Password
          </label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
        
        
          </div>
        </div>

        <button type="button" className={styles.submitButton}>
          Sign up
        </button>

        <div className="text-center">
          <p>
            already a member  <a href="#!">Sign In</a>
          </p>
        </div>
        </div>
      </form>
    </div>
  );
};

export default signup;
