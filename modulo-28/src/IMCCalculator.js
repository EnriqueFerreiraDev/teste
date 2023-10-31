// IMCCalculator.js
import React, { useState } from 'react';

const IMCCalculator = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setIMC] = useState(0);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100; // Converter altura para metros
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado);

    // Classificação baseada no IMC
    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso Normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado < 34.9) {
      setClassificacao('Obesidade Grau I');
    } else if (imcCalculado < 39.9) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III');
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      <div>
        <h2>Seu IMC é: {imc.toFixed(2)}</h2>
        <p>Classificação: {classificacao}</p>
      </div>
    </div>
  );
};

export default IMCCalculator;
