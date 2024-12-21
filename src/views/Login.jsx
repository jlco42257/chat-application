import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <section className="login__container">
      <h1 className="login__title">Login</h1>
      <form className="login__form">
        <input className="form__input" id="email" name="email" placeholder="email" type="email"/>
        <input className="form__input" id="password" name="password" placeholder="password" type="password"/>
        <button type="submit" className="form__submit">Login</button>
        <p className='form__footer'>Don't have an account?<Link className='footer__link' to='/signin'>Sign in</Link></p>
      </form>
    </section>
  )
}

export default Login
