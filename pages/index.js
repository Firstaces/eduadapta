import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { atividades, kiwifyLinks } from "../data/atividades";

export default function Home() {
  const [kitAtivo, setKitAtivo] = useState("matematica");

  const imprimirAtividade = () => {
    const kitSelecionado = atividades[kitAtivo];
    if (!kitSelecionado) {
      alert("Selecione uma matéria primeiro!");
      return;
    }

    const printWindow = window.open("", "_blank");
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Atividade para Impressão - EduAdapta</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .activity { margin-bottom: 30px; page-break-inside: avoid; }
          .activity h5 { border-bottom: 2px solid #333; padding-bottom: 10px; }
          .bg-highlight { background-color: #f9f9f9; border: 1px solid #ddd; padding: 12px; border-radius: 8px; }
          .font-bold { font-weight: bold; }
          .text-center { text-align: center; }
          .mb-4 { margin-bottom: 16px; }
          .mt-4 { margin-top: 16px; }
          .space-y-2 > * + * { margin-top: 8px; }
          .flex { display: flex; }
          .justify-between { justify-content: space-between; }
          .p-2 { padding: 8px; }
          .rounded { border-radius: 4px; }
          .bg-white { background-color: white; }
        </style>
      </head>
      <body>
        <h1>EduAdapta - Atividades Adaptadas</h1>
        <h2>${kitSelecionado.titulo}</h2>
        <hr>
        ${kitSelecionado.atividades
          .map(
            (atividade) => `
          <div class="activity">
            <h5>${atividade.titulo}</h5>
            <div class="bg-highlight">
              <p><strong>Objetivo:</strong> ${atividade.objetivo}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  const renderAtividade = (atividade, materia) => {
    const { conteudo, tipo } = atividade;

    if (tipo === "calculo") {
      return (
        <div className={`bg-${materia.cor}-50 p-4 rounded`}>
          <p className="text-center mb-3">
            <strong>{conteudo.descricao}</strong>
          </p>
          <p className="mb-2">{conteudo.preco}</p>
          <div className="space-y-2">
            {conteudo.exercicios.map((ex, idx) => (
              <div
                key={idx}
                className="flex justify-between bg-white p-2 rounded"
              >
                <span>{ex.pergunta}</span>
                <span className="text-sm text-gray-600">{ex.dica}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (tipo === "interpretacao" && conteudo.dados) {
      return (
        <div className={`bg-${materia.cor}-50 p-4 rounded`}>
          <p className="text-center mb-3">
            <strong>{conteudo.descricao}</strong>
          </p>
          <div className="grid grid-cols-3 gap-2 text-center">
            {conteudo.dados.map((item, idx) => (
              <div key={idx} className="bg-white p-2 rounded">
                <div className="font-bold">{item.dia}</div>
                <div className="text-2xl">{item.temp}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1">
            {conteudo.perguntas.map((pergunta, idx) => (
              <p key={idx}>{pergunta}</p>
            ))}
          </div>
        </div>
      );
    }

    if (tipo === "interpretacao" && conteudo.questoes) {
      return (
        <div className={`bg-${materia.cor}-50 p-4 rounded`}>
          <h6 className="font-bold mb-2">{conteudo.titulo}</h6>
          <p className="text-sm mb-3">{conteudo.texto}</p>
          <div className="space-y-2">
            {conteudo.questoes.map((questao, idx) => (
              <div key={idx} className="bg-white p-2 rounded">
                <strong>
                  {idx + 1}. {questao.pergunta}
                </strong>
                <div className="mt-1">
                  {questao.opcoes.map((opcao, opIdx) => (
                    <label key={opIdx} className="flex items-center">
                      <input type="radio" name={`q${idx}`} className="mr-2" />
                      {opcao}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (tipo === "classificacao" && conteudo.textos) {
      return (
        <div className="space-y-3">
          {conteudo.textos.map((texto, idx) => (
            <div key={idx} className={`bg-${materia.cor}-50 p-3 rounded`}>
              <div className="font-bold mb-2">Texto {texto.letra}:</div>
              <p className="text-sm">{texto.conteudo}</p>
              <div className="mt-2">
                <strong>Este texto é:</strong>
                <div className="flex space-x-4 mt-1">
                  {texto.opcoes.map((opcao, opIdx) => (
                    <label key={opIdx}>
                      <input
                        type="radio"
                        name={`tipo${idx}`}
                        className="mr-1"
                      />
                      {opcao}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (tipo === "sequencia") {
      return (
        <div className={`bg-${materia.cor}-50 p-4 rounded`}>
          <p className="text-center mb-3">
            <strong>{conteudo.ambiente}</strong>
          </p>
          <div className="space-y-2">
            {conteudo.cadeia.map((item, idx) => (
              <div key={idx}>
                <div className="bg-white p-3 rounded flex items-center justify-between">
                  <span className="text-2xl">{item.elemento}</span>
                  <span className="font-bold">{item.nome}</span>
                  <span
                    className={`text-sm bg-${item.cor}-100 px-2 py-1 rounded`}
                  >
                    {item.tipo}
                  </span>
                </div>
                {idx < conteudo.cadeia.length - 1 && (
                  <div className="text-center text-2xl">⬇️</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 bg-white p-2 rounded">
            <strong>Complete:</strong> {conteudo.pergunta}
            <div className="mt-1">___________________________</div>
          </div>
        </div>
      );
    }

    if (tipo === "classificacao" && conteudo.itens) {
      return (
        <div className={`bg-${materia.cor}-100 p-4 rounded`}>
          <p className="text-center mb-3">
            <strong>{conteudo.titulo}</strong>
          </p>
          <div className="space-y-2">
            {conteudo.itens.map((item, idx) => (
              <div key={idx} className="bg-white p-3 rounded">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <span>{item.texto}</span>
                  </div>
                  <div className="flex space-x-2">
                    <label>
                      <input type="checkbox" className="mr-1" />
                      {item.categoria}
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <Head>
        <title>
          EduAdapta - Kits de Atividades Inclusivas para Ensino Médio
        </title>
        <meta
          name="description"
          content="Atividades adaptadas para estudantes com deficiência intelectual no ensino médio. Seguindo normas da BNCC."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Atividades Adaptadas para{" "}
              <span className="text-blue-600">Ensino Médio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kits especialmente desenvolvidos para estudantes com deficiência
              intelectual. Atividades envolventes, não cansativas e prontas para
              imprimir.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "🎯",
                titulo: "Foco na Atenção",
                desc: "Atividades que mantêm o interesse sem sobrecarregar",
              },
              {
                icon: "🖨️",
                titulo: "Pronto p/ Imprimir",
                desc: "Formato otimizado para impressão em qualquer impressora",
              },
              {
                icon: "📖",
                titulo: "Ensino Médio",
                desc: "Conteúdo adaptado para todas as matérias do EM",
              },
              {
                icon: "♿",
                titulo: "Inclusivo",
                desc: "Desenvolvido para deficiência intelectual",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="feature-icon w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {feature.titulo}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Kit Selector */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Escolha sua Matéria
            </h3>

            {/* Botões das Matérias */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => setKitAtivo("matematica")}
                className={`p-4 rounded-lg font-semibold transition-all border-2 ${
                  kitAtivo === "matematica"
                    ? "bg-blue-200 border-blue-400 text-blue-800"
                    : "bg-blue-100 hover:bg-blue-200 text-blue-800 border-transparent hover:border-blue-300"
                }`}
              >
                🔢 Matemática
              </button>
              <button
                onClick={() => setKitAtivo("portugues")}
                className={`p-4 rounded-lg font-semibold transition-all border-2 ${
                  kitAtivo === "portugues"
                    ? "bg-green-200 border-green-400 text-green-800"
                    : "bg-green-100 hover:bg-green-200 text-green-800 border-transparent hover:border-green-300"
                }`}
              >
                📝 Português
              </button>
              <button
                onClick={() => setKitAtivo("ciencias")}
                className={`p-4 rounded-lg font-semibold transition-all border-2 ${
                  kitAtivo === "ciencias"
                    ? "bg-purple-200 border-purple-400 text-purple-800"
                    : "bg-purple-100 hover:bg-purple-200 text-purple-800 border-transparent hover:border-purple-300"
                }`}
              >
                🔬 Ciências
              </button>
            </div>

            {/* Conteúdo do Kit */}
            <div className="border-t pt-8">
              {atividades[kitAtivo] && (
                <div>
                  <h4
                    className={`text-xl font-bold text-${atividades[kitAtivo].cor}-800 mb-4`}
                  >
                    {atividades[kitAtivo].titulo}
                  </h4>

                  <div className="grid md:grid-cols-2 gap-8">
                    {atividades[kitAtivo].atividades.map((atividade) => (
                      <div
                        key={atividade.id}
                        className="print-preview p-6 rounded-lg"
                      >
                        <h5 className="font-semibold mb-4 text-center">
                          {atividade.titulo}
                        </h5>

                        <div className="space-y-4">
                          {renderAtividade(atividade, atividades[kitAtivo])}
                        </div>

                        <div
                          className={`mt-4 p-3 bg-${atividades[kitAtivo].cor}-50 rounded text-sm`}
                        >
                          <strong>Objetivo:</strong> {atividade.objetivo}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Botões de Ação */}
            <div className="mt-8 text-center">
              <button
                onClick={imprimirAtividade}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold mr-4 transition-all"
              >
                🖨️ Imprimir Atividade
              </button>
              <a
                href={kiwifyLinks.completo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-block"
              >
                💰 Comprar Kit Completo
              </a>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Planos para Professores
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-400 transition-all">
                <h4 className="text-xl font-bold mb-2">Kit Individual</h4>
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  R$ 47
                </div>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✓ 1 matéria escolhida</li>
                  <li>✓ 20 atividades adaptadas</li>
                  <li>✓ Guia do professor</li>
                  <li>✓ Formato para impressão</li>
                </ul>
                <a
                  href={kiwifyLinks.individual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all inline-block"
                >
                  Comprar
                </a>
              </div>

              <div className="border-2 border-green-400 rounded-xl p-6 text-center bg-green-50 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
                <h4 className="text-xl font-bold mb-2">Kit Completo</h4>
                <div className="text-3xl font-bold text-green-600 mb-4">
                  R$ 97
                </div>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✓ Todas as 3 matérias</li>
                  <li>✓ 60 atividades adaptadas</li>
                  <li>✓ Guias detalhados</li>
                  <li>✓ Atividades extras</li>
                  <li>✓ Suporte por email</li>
                </ul>
                <a
                  href={kiwifyLinks.completo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all inline-block"
                >
                  Comprar
                </a>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6 text-center hover:border-purple-400 transition-all">
                <h4 className="text-xl font-bold mb-2">Licença Escola</h4>
                <div className="text-3xl font-bold text-purple-600 mb-4">
                  R$ 197
                </div>
                <ul className="text-sm space-y-2 mb-6">
                  <li>✓ Uso ilimitado na escola</li>
                  <li>✓ Todos os kits</li>
                  <li>✓ Atualizações gratuitas</li>
                  <li>✓ Treinamento online</li>
                  <li>✓ Suporte prioritário</li>
                </ul>
                <a
                  href={kiwifyLinks.escola}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all inline-block"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
