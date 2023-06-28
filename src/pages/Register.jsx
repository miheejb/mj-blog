import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <p> This is an error ! </p>
        <span>
          Do you have an account? 
          <Link to="../login">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Register