import styles from "./index.module.css";

function Home(){
    return(
        <div className = {styles.question}>
            <h1>
                Selecione um número <input type="number" id="number"></input> 
                <input type="button" id="button" value={"Calcular o quadrado"}></input>
            </h1>
            
        </div>
    )
    
}

export default Home;