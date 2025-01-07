import React, { useState } from "react";
import "./CalculatorStyle.css"
import Container from '@mui/material/Container';
import { Box } from "@mui/material";


export default function Calculator() {

    const [num, setNum] = useState(0);
    //hook de monitoramento de estado(useState)
    const [oldnum, setOldNum] = useState(0);
    const [operador, setOperador] = useState(0);


    function inputNum(e) {
        num === 0 ? setNum(e.target.value) : setNum(num + e.target.value);
        //operador ternario (if e else -> antes da interrogaçao= condiçao, depois da interrogaçao= se a condiçao for verdadeira, depois dos dois pontinhos = se a condiçao for falsa)
    }

    function reset() {
        setNum(0);
    }

    function porcentagem() {
        setNum(num / 100);
        //calculo de porcentagem comum
    }

    function alteracaoSinal() {
        num > 0 ? setNum(-num) : setNum(Math.abs(num));
        //math.abs = biblioteca que transforma um numero negativo em positivo
    }

    function operadorSelecionado(e) {
        let operadorInput = e.target.value;
        setOperador(operadorInput);
        //assim que o usuario clicar no operador, o numero antes clicado irá ser guardado na funçao setoldnum, assim será liberado para a funçao setnum guardar um novo valor e executar a operaçao desejada
        setOldNum(num);
        setNum(0);
    }

    function calculo() {
        if (operador === '/') {
            setNum(parseFloat(oldnum) / parseFloat(num))
        }
        else if (operador === 'X') {
            setNum(oldnum * num)
        }
        else if (operador === '+') {
            setNum(parseFloat(oldnum) + parseFloat(num))
            //necessario parsefloat pois o javascript concatena como se fosse duas strings sem o uso do parse
        }
        else if (operador === '-') {
            setNum(oldnum - num)
        }

    }

    return (
        <Box m={(4)}>
            <Container maxWidth="xs">
                <div className="calculadora">
                    <Box m={(1)}>
                        <div className="calculadoraCabecalho">
                            <h2 className="resultado">{num}</h2>
                        </div>
                        <div className="calculadoraCorpo">
                            <button className="green" onClick={reset}>AC</button>
                            <button className="green" onClick={alteracaoSinal}>+/-</button>
                            <button className="green" onClick={porcentagem}>%</button>
                            <button className="purple" onClick={operadorSelecionado} value={'/'}>/</button>
                            <button onClick={inputNum} value={7}>7</button>
                            <button onClick={inputNum} value={8}>8</button>
                            <button onClick={inputNum} value={9}>9</button>
                            <button className="purple" onClick={operadorSelecionado} value={'X'}>X</button>
                            <button onClick={inputNum} value={4}>4</button>
                            <button onClick={inputNum} value={5}>5</button>
                            <button onClick={inputNum} value={6}>6</button>
                            <button className="purple" onClick={operadorSelecionado} value={'-'}>-</button>
                            <button onClick={inputNum} value={1}>1</button>
                            <button onClick={inputNum} value={2}>2</button>
                            <button onClick={inputNum} value={3}>3</button>
                            <button className="purple" onClick={operadorSelecionado} value={'+'}>+</button>
                            <button onClick={inputNum} value={0}>0</button>
                            <button onClick={inputNum} value={"."}>.</button>

                            <button style={{ visibility: "hidden" }}>,</button>

                            <button className="green" onClick={calculo}>=</button>
                        </div>
                    </Box>
                </div>
            </Container>
        </Box>
    )
}