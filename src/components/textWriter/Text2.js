import { useState, useEffect } from "react";

export const Text2 = ({ text }) => {
  const [textoDigitado, setTextoDigitado] = useState("");
  const [posicaoAtual, setPosicaoAtual] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (posicaoAtual < text.length) {
        setTextoDigitado(textoDigitado + text.charAt(posicaoAtual));
        setPosicaoAtual(posicaoAtual + 1);
      }
    }, 50); // tempo em milissegundos

    return () => clearTimeout(timer);
  }, [textoDigitado, posicaoAtual, text]);

  return <p className="h-[72px] sm:h-[48px]">{textoDigitado}</p>;
}
