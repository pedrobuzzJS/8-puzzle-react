import React, { useState } from "react";
import { BoardContainer, Container } from "./styles";

export const Board: React.FC = () => {
    const [ goal, setGoal ] = useState<any[][]>([
        ['1','2','3'],
        ['4','5','6'],
        ['7','8',' ']
    ]);

    const [ initialState, setInitialState ] = useState<any[][]>([
        ['3','6','2'],
        ['5',null,'7'],
        ['1','8','4']
    ]);

    const [ nJogadas, setNJogada ] = useState<number>(0);

    const alterBoard = (campo: any[]) => {
        setInitialState([...campo]);
    };

    const jogadas = {
        upMove(linha: number, coluna: number) {
            const newBoard = initialState;
            const aux = newBoard[linha][coluna];
            newBoard[linha-1][coluna] = aux;
            newBoard[linha][coluna] = null;
            alterBoard(newBoard);
            setNJogada(nJogadas+1);
            console.log("***", initialState);
        },
        downMove(linha: number, coluna: number) {
            const newBoard = initialState;
            const aux = newBoard[linha][coluna];
            newBoard[linha+1][coluna] = aux;
            newBoard[linha][coluna] = null
            alterBoard(newBoard);
            setNJogada(nJogadas+1);
            console.log("***", initialState);
        },
        rightMove(linha: number, coluna: number) {
            const newBoard = initialState;
            const aux = newBoard[linha][coluna];
            newBoard[linha][coluna+1] = aux;
            newBoard[linha][coluna] = null
            alterBoard(newBoard);
            setNJogada(nJogadas+1);
        },
        leftMove(linha: number, coluna: number) {
            const newBoard = initialState;
            const aux = newBoard[linha][coluna];
            newBoard[linha][coluna-1] = aux;
            newBoard[linha][coluna] = null
            alterBoard(newBoard);
            setNJogada(nJogadas+1);
        }
    };

    const posicoesJogaveis = () => {
        let posicao = [];
        for(let i = 0; i <= 2; i++) {
            for(let j = 0; j <= 2; j++) {
                if (initialState[i][j] === null ) posicao.push(i, j);
            };
        };
        return posicao;
    };

    const jogar = (linha: number, coluna: number) => {
        // return console.log("*** posicoes jogaveis", posicoesJogaveis());
    };

    return (
        <>
            <Container>
                <BoardContainer>
                    {initialState && initialState?.map(
                        (i, indexI) => 
                            i.map((j, indexJ) => 
                                <div
                                key={initialState[indexI][indexJ]}
                                onClick={() => jogar(indexI, indexJ)}
                                >
                                    {initialState[indexI][indexJ]}
                                </div>  
                            )
                        )
                    }
                </BoardContainer>
            </Container>
                <h1>{nJogadas}</h1>
        </>
    );
};