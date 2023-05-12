import { useState, useEffect } from "react";

export const Text1 = ({ text }) => {
  const [textoDigitado, setTextoDigitado] = useState("");
  const [posicaoAtual, setPosicaoAtual] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (posicaoAtual < text.length) {
        setTextoDigitado(textoDigitado + text.charAt(posicaoAtual));
        setPosicaoAtual(posicaoAtual + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [textoDigitado, posicaoAtual, text]);

  return (
    <h2 class="
    text-left text-3xl
    font-bold
    sm:text-5xl
    mt-10
    h-[72px] sm:h-[100px] md:h-[240px] lg:h-[190px] xl:h-[140px]">
      {textoDigitado}
    </h2>
  )
} /* min-h-[150px] */
