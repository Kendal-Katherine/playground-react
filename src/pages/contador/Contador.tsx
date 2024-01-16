import { useState } from "react"


function Contador() {

  const [valor, setValor] = useState(0)

  function handleClick() {
    setValor(valor + 1);

  }

  return (
    <div style={{
      textAlign: "center",
      border: '1px solid #ccc',
      padding: '20px',
      margin: '10px', 
      backgroundColor: '#FFCBDB'
    }}>
      <h2>Componente Contador</h2>
      <p>O valor atual é: {valor}</p>
      <button onClick={handleClick} style={{
        backgroundColor: "#9400D3",
        color: '#fff',
        padding: '10px',
        cursor: 'pointer'
      }}>Adicionar + 1</button>
    </div>
  )
}

export default Contador