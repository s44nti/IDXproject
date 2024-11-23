import React from 'react';

function Ejercicio2() {
  const equiposFPC = ['America.png', 'Millonarios.png', 'Nacional.png', 'SantaFe.png', 'Tolima.png'];
  const [equipoSeleccionado, setEquipoSeleccionado] = React.useState(0);

  function equipoSiguiente() {
    if (equipoSeleccionado < equiposFPC.length - 1) {
      setEquipoSeleccionado(equipoSeleccionado + 1);
    }
  }

  function equipoPrevio() {
    if (equipoSeleccionado > 0) {
      setEquipoSeleccionado(equipoSeleccionado - 1);
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Equipos del Fútbol Profesional Colombiano</h1>
      <div style={styles.imageContainer}>
        <img
          src={"/imagenes/" + equiposFPC[equipoSeleccionado]}
          alt="equipo"
          style={styles.image}
        />
      </div>
      <p style={styles.navigation}>
        <button style={styles.button} onClick={equipoPrevio}>
          &#60;
        </button>
        <span style={styles.label}>
          {equiposFPC[equipoSeleccionado].replace('.png', '')}
        </span>
        <button style={styles.button} onClick={equipoSiguiente}>
          &#62;
        </button>
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  imageContainer: {
    display: 'inline-block',
    border: '2px solid #fff',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '15px',
  },
  image: {
    maxWidth: '300px',
    maxHeight: '270px',
    width: '100%',
    height: 'auto',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '15px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Ejercicio2;
