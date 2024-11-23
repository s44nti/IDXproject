import { useState } from 'react';

function Ejercicio1() {
  const [estudios, setEstudios] = useState('');

  function cambioEstudios(e) {
    setEstudios(e.target.value);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seleccione su nivel de estudios</h1>
      <div style={styles.radioGroup}>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="Primario"
            checked={estudios === 'Primario'}
            onChange={cambioEstudios}
            style={styles.radioInput}
          />
          Primario
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="Secundario"
            checked={estudios === 'Secundario'}
            onChange={cambioEstudios}
            style={styles.radioInput}
          />
          Secundario
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="Universitario"
            checked={estudios === 'Universitario'}
            onChange={cambioEstudios}
            style={styles.radioInput}
          />
          Universitario
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="Maestría"
            checked={estudios === 'Maestría'}
            onChange={cambioEstudios}
            style={styles.radioInput}
          />
          Maestría
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="Especialización"
            checked={estudios === 'Especialización'}
            onChange={cambioEstudios}
            style={styles.radioInput}
          />
          Especialización
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            value="Certificación React"
            checked={estudios === 'Certificación React'}
            onChange={cambioEstudios}
            style={styles.radioInput}
          />
          Certificación React
        </label>
      </div>
      <p style={styles.selectedText}>
        <strong>Estudio seleccionado:</strong> {estudios || 'Ninguno'}
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
    fontSize: '24px',
    marginBottom: '20px',
  },
  radioGroup: {
    display: 'inline-block',
    textAlign: 'left',
    margin: '0 auto',
  },
  radioLabel: {
    display: 'block',
    fontSize: '18px',
    margin: '10px 0',
  },
  radioInput: {
    marginRight: '10px',
    accentColor: '#007BFF', // Cambia el color del radio en navegadores modernos.
    cursor: 'pointer',
  },
  selectedText: {
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default Ejercicio1;
