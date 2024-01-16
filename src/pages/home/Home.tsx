import { useState } from "react";

interface homeProps {
    titulo: string;
    texto: string;
}
function Home(props: homeProps) {

    const [isLogged, setIsLogged] = useState(false);



    return (
        <>
            {/* condição ? ação se for verdadeira : ação se for falsa*/}

            {
                isLogged ? (
                    <div style={{
                        textAlign: "center",
                        padding: "20px",
                        border: "1px solid #ccc",
                        margin: "10px",
                        backgroundColor: '#dff0f8'
                    }}>
                        <h2>{props.titulo}</h2>
                        <p>{props.texto}</p>
                    </div>
                ) : (
                    <div style={{
                        textAlign: "center",
                        padding: "20px",
                        border: "1px solid #ccc",
                        margin: "10px",
                        backgroundColor: '#FFCBDB'
                    }}>
                        <h2>Login</h2>
                        <button onClick={() => setIsLogged(true)} style={{
                            textAlign: "center",
                            backgroundColor: "#9400D3",
                            color: "#fff",
                            padding: "10px",
                            cursor: "pointer",
                        }}>Entrar</button>
                    </div>
                )
            }
        </>
    )
}
export default Home