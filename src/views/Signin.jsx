import './Login.css'
function Signin() {
  return (
    <section className="login__container">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form">
        <input className="form__input" id="name" name="name" placeholder="name" type="text"/>
        <input className="form__input" id="email" name="email" placeholder="email" type="email"/>
        <input className="form__input" id="password" name="password" placeholder="password" type="password"/>
        <button type="submit" className="form__submit">Sign in</button>
      </form>
    </section>
  )
}

export default Signin