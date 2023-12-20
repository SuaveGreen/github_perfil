import { useState, useEffect } from "react";

const Formulario = () => {
    cons [materiaA, setMateriaA] = useState(0);
    cons [materiaB, setMateriaB] = useState(0);
    cons [materiaC, setMateriaC] = useState(0);
    cons [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    const alteraNome = (evento) => {
        // setNome(evento.target.value);

        setNome(estadoAnterior => {
            return evento.target.value
        })

    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>{nome}, você foi APROVADO</p>
            )
        } else {
            return (
                <p>{nome}, você foi REPROVADO</p>	
            )
        }
    }
    
    return (
        <form>
            <input type="text" placeholder="Nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;