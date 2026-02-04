function Login() {
  return (
    <div className="card">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Email or Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
