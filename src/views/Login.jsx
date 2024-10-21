function Login() {
  return (
    <section className="w-4/12 h-svh mx-auto grid place-content-center text-white">
      <h1 className="text-center text-2xl font-bold mb-5">Login</h1>
      <form className="bg-slate-800 flex flex-nowrap flex-col w-fit rounded-md p-7 gap-y-7">
        <input className="bg-transparent border-b-2 border-b-slate-500 focus:outline-none" id="username" name="username" placeholder="username" type="text"/>
        <input className="bg-transparent border-b-2 border-b-slate-500 focus:outline-none" id="password" name="password" placeholder="password" type="password"/>
        <button type="submit" className="bg-sky-800 rounded-md">Login</button>
      </form>
    </section>
  )
}

export default Login
