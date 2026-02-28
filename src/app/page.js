import { CircleIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1C181C]">
      {/* Card */}
      <main className="bg-[#1B1C22] border border-gray-600 rounded-2xl shadow-2xl shadow-[#FA8938]/9 p-8">
        {/* Esquerda */}
        <section>
          {/* Topo */}
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Calculadora <strong className="text-orange-400">IMC</strong>
            </h1>
            <p className="text-sm text-gray-500">Índice de Massa Corporal</p>

            <h2 className="text-4xl text-emerald-500 font-bold">0</h2>
            <p>IMC</p>

            <p className="text-lg text-emerald-500 font-semibold">
              Peso normal
            </p>
          </div>

          {/* Fim */}
          <section>
            <div className="flex items-center gap-3 justify-between">
              {/* Elemento */}
              <div className="flex items-center gap-3">
                <CircleIcon size={14} weight="fill" />
                <p>Abaixo do peso</p>
              </div>

              <p>{"<"} 18.5</p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              {/* Elemento */}
              <div className="flex items-center gap-3">
                <CircleIcon size={14} weight="fill" />
                <p>Abaixo do peso</p>
              </div>

              <p>{"<"} 18.5</p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              {/* Elemento */}
              <div className="flex items-center gap-3">
                <CircleIcon size={14} weight="fill" />
                <p>Abaixo do peso</p>
              </div>

              <p>{"<"} 18.5</p>
            </div>
            <div className="flex items-center gap-3 justify-between">
              {/* Elemento */}
              <div className="flex items-center gap-3">
                <CircleIcon size={14} weight="fill" />
                <p>Abaixo do peso</p>
              </div>

              <p>{"<"} 18.5</p>
            </div>
          </section>
        </section>

        {/* Direita */}
        <section></section>
      </main>
    </div>
  );
}
