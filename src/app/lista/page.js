'use client'

import styles from "./page.module.css";
import { useState } from "react";

export default function Lista() {

    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);

    const handleButtonClick = () => {

        if(inputTexto.trim() === ""){
            return;
        }

        setLista([...lista, inputTexto]);

        setInputTexto("");
    }

    const removerTarefa = (index) => {

        const novaLista = [...lista];

        novaLista.splice(index, 1);

        setLista(novaLista);
    }

    return (
        <main className={styles.main}>

            <div className={styles.container}>

                <h1 className={styles.titulo}>
                    ✨ Lista de Tarefas
                </h1>

                <p className={styles.subtitulo}>
                    Organiza as tuas tarefas
                </p>

                <div className={styles.divInputBtn}>

                    <input
                        type="text"
                        placeholder="Escreve uma tarefa..."
                        value={inputTexto}
                        onChange={(e) => {
                            setInputTexto(e.target.value)
                        }}
                        className={styles.inputLista}
                    />

                    <button
                        onClick={handleButtonClick}
                        className={styles.botaoLista}
                    >
                        Adicionar
                    </button>

                </div>

                <div className={styles.listaTarefas}>

                    {lista.map((entrada, index) => {

                        return (

                            <div
                                key={index}
                                className={styles.tarefa}
                            >

                                <span>
                                    🚀 {entrada}
                                </span>

                                <button
                                    className={styles.botaoRemover}
                                    onClick={() => removerTarefa(index)}
                                >
                                    ✕
                                </button>

                            </div>

                        );

                    })}

                </div>

            </div>

        </main>
    );
}