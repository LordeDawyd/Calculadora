import { useState } from "react";
import * as S from "./style";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [resultado, setResultado] = useState(0);

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturaSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <S.Main>
      <S.Title>Calculadora</S.Title>
      <S.Input
        type="number"
        placeholder="Insira um numero"
        onChange={capturandoPrimeiroValor}
      />
      <S.Input
        type="number"
        placeholder="Insira um numero"
        onChange={capturaSegundoValor}
      />
      <S.Button onClick={soma}>+</S.Button>
      <S.Button onClick={subtracao}>-</S.Button>
      <S.Button onClick={multiplicacao}>*</S.Button>
      <S.Button onClick={divisao}>/</S.Button>
      <S.Result>Resultado: {resultado}</S.Result>
    </S.Main>
  );
}
