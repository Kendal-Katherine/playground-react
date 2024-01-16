import { useEffect, useState } from "react"

 
 function Tarefa() {

    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if(completed){
            setTarefa('Parabéns! Você concluiu a tarefa!')
        }
    }, [completed])
   return (
    <div style={{
        textAlign: "center",
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        backgroundColor: completed ? '#dff0d8' : '#FFCBDB'
    }}>
        <h2>Componente Tarefa</h2>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa</p>
        <button onClick={() => setCompleted(true)} style={{
             textAlign: "center",
             backgroundColor: "#9400D3",
             color: "#fff",
             padding: "10px",
             cursor: "pointer",
        }}
        
        >Concluir Tarefa</button>
    </div>
   )
 }
 
 export default Tarefa