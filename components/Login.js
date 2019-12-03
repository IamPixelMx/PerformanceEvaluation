import Link from "next/link";

const Login = () => (
  <section id="login" className="columns is-centered">
    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
      <form action="" className="box">
        <div className="field">
          <label htmlFor="" className="label">
            Correo
          </label>
          <div className="control has-icons-left">
            <input
              type="email"
              placeholder="username@laboratoria.la"
              className="input"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Contraseña
          </label>
          <div className="control has-icons-left">
            <input
              type="password"
              placeholder="**********"
              className="input"
              required
            />
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="checkbox">
            <input type="checkbox" />
            Recordarme
          </label>
        </div>
        <div className="field has-text-centered">
          <Link href="/home">
            <button className="button is-succes is-outlined is-rounded">Login</button>
          </Link>
        </div>
      </form>
    </div>
    <style jsx>{``}</style>
  </section>
);

export default Login;
