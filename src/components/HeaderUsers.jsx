import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function HeaderUser() {
  const {cerrarSesion} = useAuth()
  return (
    <>
      <nav className="navbar navbar-expand-lg px-5 bg-color-unico">
        <div className="container-fluid">
          <a className="navbar-brand me-5 text-danger fw-bold fs-3 " href="#">GPE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li className="nav-item">
                <Link to="/user" className="mx-5 px-3 fs-5 text-color-white-claro text-color-white-hover enlace" >Listar Ordenes</Link>
              </li>

              <li className="nav-item">
                <Link to="/user/orden-create" className="mx-5 px-3 fs-5 text-color-white-claro text-color-white-hover enlace" >Crear Orden</Link>

              </li>

              <li className="nav-item">
                <Link to="/user/profile" className="mx-5 px-3 fs-5 text-color-white-claro text-color-white-hover enlace" >Perfil</Link>

              </li>
              <li className="nav-item">
                <button onClick={cerrarSesion} className="mx-5 px-3 fs-5 text-color-white-claro btn-nav text-color-white-hover enlace">Cerrar Sesion</button>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderUser