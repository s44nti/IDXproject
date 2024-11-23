import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation(); // Para verificar la ruta actual

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={location.pathname === "/" ? styles.activeLink : styles.link}>
            <Link to="/" style={styles.navLink}>Inicio</Link>
          </li>
          <li
            style={
              location.pathname === "/Ejercicio1"
                ? styles.activeLink
                : styles.link
            }
          >
            <Link to="/Ejercicio1" style={styles.navLink}>Ejercicio1</Link>
          </li>
          <li
            style={
              location.pathname === "/Ejercicio2"
                ? styles.activeLink
                : styles.link
            }
          >
            <Link to="/Ejercicio2" style={styles.navLink}>Ejercicio2</Link>
          </li>
        </ul>
      </nav>
      <hr style={styles.divider} />
      <div style={styles.content}>
        {location.pathname === "/" && (
          <p style={styles.footer}>
           <strong> Realizado por: </strong> <br></br> <br></br>
            David Santiago Vega Correa<br></br>
            Jonathan Daniel Devia Pineda<br></br>
            Juan Felipe Grimaldo Marin
          </p>
        )}
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    backgroundColor: "#007BFF",
    padding: "10px 20px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
    padding: 0,
    margin: 0,
  },
  link: {
    padding: "10px 15px",
    borderRadius: "5px",
  },
  activeLink: {
    padding: "10px 15px",
    borderRadius: "5px",
    backgroundColor: "#0056b3",
  },
  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },
  divider: {
    margin: "20px 0",
    borderColor: "#ffffff",
    borderWidth: "1px",
  },
  content: {
    padding: "20px",
    flexGrow: 1,
  },
  footer: {
    marginTop: "20px",
    fontSize: "18px",
    textAlign: "center",
    color: "#cccccc",
  },
};

export default Layout;
