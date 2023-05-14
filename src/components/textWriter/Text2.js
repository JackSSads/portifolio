import { useState, useEffect } from "react";

export const Text2 = ({ text }) => {
  const [textoDigitado, setTextoDigitado] = useState("");
  const [posicaoAtual, setPosicaoAtual] = useState(0);
  const [executar, setExecultar] = useState(false);

  useEffect(() => {
    const executeTime = setTimeout(() => setExecultar(true), 3000);

    return () => clearTimeout(executeTime);
  }, [])

  useEffect(() => {
    function exec() {
      const timer = setTimeout(() => {
        if (posicaoAtual < text.length) {
          setTextoDigitado(textoDigitado + text.charAt(posicaoAtual));
          setPosicaoAtual(posicaoAtual + 1);
        }
      }, 22); // tempo em milissegundos

      return () => clearTimeout(timer);
    }

    if (executar)  exec()

  }, [textoDigitado, posicaoAtual, executar, text]);

  console.log(textoDigitado.length)
  return <p className="h-[72px] sm:h-[48px]">{textoDigitado}</p>;
}
/* 90 litras | 90 * = 1.980 */