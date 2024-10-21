import './Login.css'
function Register() {
  return (
    <section className="login__container">
      <h1 className="login__title">Register</h1>
      <form className="login__form">
        <input className="form__input" id="name" name="name" placeholder="name" type="text"/>
        <input className="form__input" id="email" name="email" placeholder="email" type="email"/>
        <input className="form__input" id="password" name="password" placeholder="password" type="password"/>
        <button type="submit" className="form__submit">Register</button>
      </form>
    </section>
  )
}

export default Register
