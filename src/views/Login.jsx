import './Login.css'
function Login() {
  return (
    <section className="login__container">
      <h1 className="login__title">Login</h1>
      <form className="login__form">
        <input className="form__input" id="email" name="email" placeholder="email" type="email"/>
        <input className="form__input" id="password" name="password" placeholder="password" type="password"/>
        <button type="submit" className="form__submit">Login</button>
      </form>
    </section>
  )
}

export default Login
