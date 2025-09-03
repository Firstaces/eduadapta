import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { kitCompleto } from "../data/kitCompleto";

// Kits Individuais por Matéria
const kitsIndividuais = {
  matematica: {
    titulo: "Kit Individual - Matemática",
    cor: "orange",
    preco: "R$ 47,00",
    descricao: "20 atividades adaptadas de Matemática para Ensino Médio",
    bncc: "EM13MAT302",
    atividades: [
      {
        id: 1,
        titulo: "Preço do Combustível",
        objetivo: "Compreender relação linear entre quantidade e preço total",
        tipo: "Cálculo",
        tempo: "15 min",
      },
      {
        id: 2,
        titulo: "Gráfico Simples",
        objetivo: "Interpretar dados em tabelas e identificar variações",
        tipo: "Interpretação",
        tempo: "20 min",
      },
      {
        id: 3,
        titulo: "Conta de Luz",
        objetivo: "Aplicar função linear em situações do cotidiano",
        tipo: "Cálculo",
        tempo: "15 min",
      },
      {
        id: 4,
        titulo: "Crescimento de Plantas",
        objetivo: "Identificar padrões em progressões aritméticas",
        tipo: "Sequência",
        tempo: "20 min",
      },
      {
        id: 5,
        titulo: "Compras no Mercado",
        objetivo: "Resolver problemas de proporcionalidade direta",
        tipo: "Proporção",
        tempo: "15 min",
      },
      {
        id: 6,
        titulo: "Velocidade Constante",
        objetivo: "Compreender relação entre velocidade, tempo e distância",
        tipo: "Física",
        tempo: "25 min",
      },
      {
        id: 7,
        titulo: "Poupança",
        objetivo: "Aplicar função linear em planejamento financeiro",
        tipo: "Financeiro",
        tempo: "20 min",
      },
      {
        id: 8,
        titulo: "Receita de Bolo",
        objetivo: "Resolver problemas de proporcionalidade",
        tipo: "Proporção",
        tempo: "15 min",
      },
      {
        id: 9,
        titulo: "Gráfico de Barras",
        objetivo: "Interpretar e analisar dados em gráficos",
        tipo: "Interpretação",
        tempo: "20 min",
      },
      {
        id: 10,
        titulo: "Função Linear y = 2x",
        objetivo: "Compreender o conceito de função linear",
        tipo: "Função",
        tempo: "25 min",
      },
      {
        id: 11,
        titulo: "Taxi",
        objetivo: "Resolver função afim com termo independente",
        tipo: "Função",
        tempo: "20 min",
      },
      {
        id: 12,
        titulo: "Temperatura",
        objetivo: "Aplicar fórmulas matemáticas em conversões",
        tipo: "Conversão",
        tempo: "25 min",
      },
      {
        id: 13,
        titulo: "Plano de Celular",
        objetivo: "Comparar funções lineares em situações práticas",
        tipo: "Comparação",
        tempo: "30 min",
      },
      {
        id: 14,
        titulo: "Coordenadas",
        objetivo: "Compreender sistema de coordenadas",
        tipo: "Geometria",
        tempo: "20 min",
      },
      {
        id: 15,
        titulo: "Desconto",
        objetivo: "Calcular porcentagens em situações comerciais",
        tipo: "Porcentagem",
        tempo: "15 min",
      },
      {
        id: 16,
        titulo: "Padrão Numérico",
        objetivo: "Identificar padrões em sequências numéricas",
        tipo: "Sequência",
        tempo: "20 min",
      },
      {
        id: 17,
        titulo: "Área do Retângulo",
        objetivo: "Aplicar fórmulas geométricas básicas",
        tipo: "Geometria",
        tempo: "15 min",
      },
      {
        id: 18,
        titulo: "Média Aritmética",
        objetivo: "Compreender conceito de média aritmética",
        tipo: "Estatística",
        tempo: "20 min",
      },
      {
        id: 19,
        titulo: "Regra de Três",
        objetivo: "Resolver problemas usando regra de três simples",
        tipo: "Proporção",
        tempo: "25 min",
      },
      {
        id: 20,
        titulo: "Revisão Geral",
        objetivo: "Consolidar todos os conceitos aprendidos",
        tipo: "Revisão",
        tempo: "30 min",
      },
    ],
  },
  portugues: {
    titulo: "Kit Individual - Português",
    cor: "green",
    preco: "R$ 47,00",
    descricao: "20 atividades adaptadas de Português para Ensino Médio",
    bncc: "EM13LP02",
    atividades: [
      {
        id: 1,
        titulo: "Notícia do Jornal",
        objetivo: "Identificar elementos estruturais de textos jornalísticos",
        tipo: "Interpretação",
        tempo: "20 min",
      },
      {
        id: 2,
        titulo: "Carta Pessoal",
        objetivo: "Reconhecer características de gêneros epistolares",
        tipo: "Gênero Textual",
        tempo: "15 min",
      },
      {
        id: 3,
        titulo: "Propaganda",
        objetivo: "Analisar recursos persuasivos em textos publicitários",
        tipo: "Análise",
        tempo: "25 min",
      },
      {
        id: 4,
        titulo: "Poema",
        objetivo: "Compreender recursos estilísticos da linguagem poética",
        tipo: "Literatura",
        tempo: "20 min",
      },
      {
        id: 5,
        titulo: "Manual de Instruções",
        objetivo: "Interpretar textos instrucionais e procedimentais",
        tipo: "Interpretação",
        tempo: "15 min",
      },
      {
        id: 6,
        titulo: "Crônica",
        objetivo: "Identificar características do gênero crônica",
        tipo: "Literatura",
        tempo: "25 min",
      },
      {
        id: 7,
        titulo: "Artigo de Opinião",
        objetivo: "Reconhecer argumentos e tese em textos opinativos",
        tipo: "Argumentação",
        tempo: "30 min",
      },
      {
        id: 8,
        titulo: "Charge",
        objetivo: "Interpretar linguagem verbal e não-verbal",
        tipo: "Interpretação",
        tempo: "15 min",
      },
      {
        id: 9,
        titulo: "Conto",
        objetivo: "Analisar elementos narrativos em textos ficcionais",
        tipo: "Literatura",
        tempo: "25 min",
      },
      {
        id: 10,
        titulo: "Entrevista",
        objetivo: "Compreender estrutura de textos dialogais",
        tipo: "Gênero Textual",
        tempo: "20 min",
      },
      {
        id: 11,
        titulo: "Resenha",
        objetivo: "Identificar características de textos críticos",
        tipo: "Análise",
        tempo: "25 min",
      },
      {
        id: 12,
        titulo: "Cordel",
        objetivo: "Reconhecer aspectos da cultura popular brasileira",
        tipo: "Literatura",
        tempo: "20 min",
      },
      {
        id: 13,
        titulo: "Editorial",
        objetivo: "Analisar posicionamento editorial em jornais",
        tipo: "Argumentação",
        tempo: "30 min",
      },
      {
        id: 14,
        titulo: "Biografia",
        objetivo: "Compreender características de textos biográficos",
        tipo: "Gênero Textual",
        tempo: "20 min",
      },
      {
        id: 15,
        titulo: "Soneto",
        objetivo: "Analisar estrutura e métrica de sonetos",
        tipo: "Literatura",
        tempo: "25 min",
      },
      {
        id: 16,
        titulo: "Relatório",
        objetivo: "Interpretar textos técnicos e informativos",
        tipo: "Interpretação",
        tempo: "20 min",
      },
      {
        id: 17,
        titulo: "Fábula",
        objetivo: "Identificar moral e ensinamentos em narrativas",
        tipo: "Literatura",
        tempo: "15 min",
      },
      {
        id: 18,
        titulo: "Debate",
        objetivo: "Compreender estrutura de textos argumentativos orais",
        tipo: "Argumentação",
        tempo: "25 min",
      },
      {
        id: 19,
        titulo: "Resumo",
        objetivo: "Desenvolver habilidades de síntese textual",
        tipo: "Produção",
        tempo: "20 min",
      },
      {
        id: 20,
        titulo: "Revisão Textual",
        objetivo: "Consolidar conhecimentos sobre gêneros textuais",
        tipo: "Revisão",
        tempo: "30 min",
      },
    ],
  },
  ciencias: {
    titulo: "Kit Individual - Ciências",
    cor: "purple",
    preco: "R$ 47,00",
    descricao: "20 atividades adaptadas de Ciências para Ensino Médio",
    bncc: "EM13CNT301",
    atividades: [
      {
        id: 1,
        titulo: "Água no Cotidiano",
        objetivo: "Compreender o ciclo da água e sua importância",
        tipo: "Ecologia",
        tempo: "20 min",
      },
      {
        id: 2,
        titulo: "Alimentação Saudável",
        objetivo: "Identificar nutrientes e suas funções no organismo",
        tipo: "Biologia",
        tempo: "25 min",
      },
      {
        id: 3,
        titulo: "Energia Elétrica",
        objetivo: "Compreender conceitos básicos de eletricidade",
        tipo: "Física",
        tempo: "20 min",
      },
      {
        id: 4,
        titulo: "Plantas Medicinais",
        objetivo: "Reconhecer propriedades terapêuticas das plantas",
        tipo: "Botânica",
        tempo: "25 min",
      },
      {
        id: 5,
        titulo: "Lixo e Reciclagem",
        objetivo: "Analisar impactos ambientais dos resíduos",
        tipo: "Ecologia",
        tempo: "20 min",
      },
      {
        id: 6,
        titulo: "Sistema Solar",
        objetivo: "Compreender características dos planetas",
        tipo: "Astronomia",
        tempo: "25 min",
      },
      {
        id: 7,
        titulo: "Corpo Humano",
        objetivo: "Identificar sistemas do organismo humano",
        tipo: "Anatomia",
        tempo: "30 min",
      },
      {
        id: 8,
        titulo: "Mudanças Climáticas",
        objetivo: "Analisar causas e consequências do aquecimento global",
        tipo: "Ecologia",
        tempo: "25 min",
      },
      {
        id: 9,
        titulo: "Materiais e Propriedades",
        objetivo: "Classificar materiais por suas características",
        tipo: "Química",
        tempo: "20 min",
      },
      {
        id: 10,
        titulo: "Animais em Extinção",
        objetivo: "Compreender importância da biodiversidade",
        tipo: "Zoologia",
        tempo: "25 min",
      },
      {
        id: 11,
        titulo: "Força e Movimento",
        objetivo: "Aplicar conceitos de mecânica no cotidiano",
        tipo: "Física",
        tempo: "25 min",
      },
      {
        id: 12,
        titulo: "Doenças e Prevenção",
        objetivo: "Identificar medidas preventivas de saúde",
        tipo: "Saúde",
        tempo: "20 min",
      },
      {
        id: 13,
        titulo: "Combustíveis",
        objetivo: "Comparar diferentes fontes de energia",
        tipo: "Química",
        tempo: "25 min",
      },
      {
        id: 14,
        titulo: "Ecossistemas",
        objetivo: "Compreender relações entre seres vivos",
        tipo: "Ecologia",
        tempo: "30 min",
      },
      {
        id: 15,
        titulo: "Tecnologia e Sociedade",
        objetivo: "Analisar impactos da tecnologia na vida",
        tipo: "Tecnologia",
        tempo: "25 min",
      },
      {
        id: 16,
        titulo: "Genética Básica",
        objetivo: "Compreender conceitos de hereditariedade",
        tipo: "Genética",
        tempo: "30 min",
      },
      {
        id: 17,
        titulo: "Som e Música",
        objetivo: "Relacionar física do som com música",
        tipo: "Física",
        tempo: "20 min",
      },
      {
        id: 18,
        titulo: "Agricultura Sustentável",
        objetivo: "Analisar práticas agrícolas sustentáveis",
        tipo: "Ecologia",
        tempo: "25 min",
      },
      {
        id: 19,
        titulo: "Medicamentos",
        objetivo: "Compreender ação de medicamentos no organismo",
        tipo: "Farmacologia",
        tempo: "25 min",
      },
      {
        id: 20,
        titulo: "Revisão Científica",
        objetivo: "Consolidar conhecimentos científicos básicos",
        tipo: "Revisão",
        tempo: "30 min",
      },
    ],
  },
};

export default function Acesso() {
  const [produtoAtivo, setProdutoAtivo] = useState(null);
  const [codigo, setCodigo] = useState("");
  const [loading, setLoading] = useState(true);
  const [materiaAtiva, setMateriaAtiva] = useState("matematica");

  // Códigos válidos por produto (em produção, isso viria de uma API)
  const codigosValidos = {
    "individual-matematica": ["INDMAT2024", "MATEMATICA20", "KITMAT47"],
    "individual-portugues": ["INDPORT2024", "PORTUGUES20", "KITPORT47"],
    "individual-ciencias": ["INDCIE2024", "CIENCIAS20", "KITCIE47"],
    completo: ["COMPLETO2024", "KITCOMP456", "FULL180"],
    escola: ["ESCOLA2024", "LICENCA789", "UNLIMITED"],
  };

  const produtos = {
    "individual-matematica": {
      nome: "Kit Individual - Matemática",
      preco: "R$ 47,00",
      descricao: "20 atividades de Matemática",
      cor: "orange",
      icone: "🔢",
    },
    "individual-portugues": {
      nome: "Kit Individual - Português",
      preco: "R$ 47,00",
      descricao: "20 atividades de Português",
      cor: "green",
      icone: "📝",
    },
    "individual-ciencias": {
      nome: "Kit Individual - Ciências",
      preco: "R$ 47,00",
      descricao: "20 atividades de Ciências",
      cor: "purple",
      icone: "🔬",
    },
    completo: {
      nome: "Kit Completo",
      preco: "R$ 97,00",
      descricao: "180 atividades (3 matérias)",
      cor: "blue",
      icone: "📚",
    },
    escola: {
      nome: "Licença Escola",
      preco: "R$ 197,00",
      descricao: "Uso ilimitado + Suporte",
      cor: "indigo",
      icone: "🏫",
    },
  };

  useEffect(() => {
    // Verificar se já tem acesso salvo
    const acessoSalvo = localStorage.getItem("eduadapta_produto");
    if (acessoSalvo) {
      setProdutoAtivo(acessoSalvo);
    }
    setLoading(false);
  }, []);

  const verificarCodigo = () => {
    let produtoEncontrado = null;

    // Verificar em qual produto o código é válido
    Object.keys(codigosValidos).forEach((produto) => {
      if (codigosValidos[produto].includes(codigo.toUpperCase())) {
        produtoEncontrado = produto;
      }
    });

    if (produtoEncontrado) {
      setProdutoAtivo(produtoEncontrado);
      localStorage.setItem("eduadapta_produto", produtoEncontrado);
      alert(`🎉 Acesso liberado ao ${produtos[produtoEncontrado].nome}!`);
    } else {
      alert("❌ Código inválido! Verifique seu email de compra.");
    }
  };

  const logout = () => {
    localStorage.removeItem("eduadapta_produto");
    setProdutoAtivo(null);
    setCodigo("");
  };

  const imprimirKitIndividual = (materia) => {
    const kit = kitsIndividuais[materia];
    const printWindow = window.open("", "_blank");

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${kit.titulo} - EduAdapta</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .activity { margin-bottom: 30px; page-break-inside: avoid; }
          .activity h5 { border-bottom: 2px solid #333; padding-bottom: 10px; }
          .bg-highlight { background-color: #f9f9f9; border: 1px solid #ddd; padding: 12px; border-radius: 8px; }
          .font-bold { font-weight: bold; }
          .text-center { text-align: center; }
          .mb-4 { margin-bottom: 16px; }
        </style>
      </head>
      <body>
        <h1>EduAdapta - ${kit.titulo}</h1>
        <h2>BNCC: ${kit.bncc}</h2>
        <p><strong>Total de atividades:</strong> ${kit.atividades.length}</p>
        <p><strong>Descrição:</strong> ${kit.descricao}</p>
        <hr>
        ${kit.atividades
          .map(
            (atividade, index) => `
          <div class="activity">
            <h5>${index + 1}. ${atividade.titulo}</h5>
            <div class="bg-highlight">
              <p><strong>Objetivo:</strong> ${atividade.objetivo}</p>
              <p><strong>Tipo:</strong> ${atividade.tipo}</p>
              <p><strong>Tempo estimado:</strong> ${atividade.tempo}</p>
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

  const imprimirKitCompleto = () => {
    const kitSelecionado = kitCompleto[materiaAtiva];

    const printWindow = window.open("", "_blank");

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Kit Completo ${kitSelecionado.titulo} - EduAdapta</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .activity { margin-bottom: 30px; page-break-inside: avoid; }
          .activity h5 { border-bottom: 2px solid #333; padding-bottom: 10px; }
          .bg-highlight { background-color: #f9f9f9; border: 1px solid #ddd; padding: 12px; border-radius: 8px; }
          .font-bold { font-weight: bold; }
          .text-center { text-align: center; }
          .mb-4 { margin-bottom: 16px; }
        </style>
      </head>
      <body>
        <h1>EduAdapta - Kit Completo</h1>
        <h2>${kitSelecionado.titulo}</h2>
        <p><strong>Total de atividades:</strong> ${
          kitSelecionado.atividades.length
        }</p>
        <hr>
        ${kitSelecionado.atividades
          .map(
            (atividade, index) => `
          <div class="activity">
            <h5>${index + 1}. ${atividade.titulo}</h5>
            <div class="bg-highlight">
              <p><strong>Objetivo:</strong> ${atividade.objetivo}</p>
              <p><strong>Tempo estimado:</strong> ${
                atividade.tempo || "15-20 minutos"
              }</p>
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!produtoAtivo) {
    return (
      <>
        <Head>
          <title>Área de Acesso - EduAdapta</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Header />

          <div className="max-w-6xl mx-auto pt-20 px-4">
            {/* Título */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                🔐 Área de Acesso
              </h2>
              <p className="text-gray-600">
                Digite o código que você recebeu por email após a compra
              </p>
            </div>

            {/* Cards dos Produtos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Kits Individuais */}
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-orange-200">
                <div className="text-4xl mb-4">🔢</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Kit Individual
                </h3>
                <h4 className="text-lg font-semibold text-orange-600 mb-2">
                  Matemática
                </h4>
                <p className="text-2xl font-bold text-orange-600 mb-2">
                  R$ 47,00
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  20 atividades adaptadas
                </p>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                  BNCC: EM13MAT302
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-green-200">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Kit Individual
                </h3>
                <h4 className="text-lg font-semibold text-green-600 mb-2">
                  Português
                </h4>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  R$ 47,00
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  20 atividades adaptadas
                </p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  BNCC: EM13LP02
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-purple-200">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Kit Individual
                </h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">
                  Ciências
                </h4>
                <p className="text-2xl font-bold text-purple-600 mb-2">
                  R$ 47,00
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  20 atividades adaptadas
                </p>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                  BNCC: EM13CNT301
                </div>
              </div>

              {/* Kit Completo */}
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-blue-200">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Kit Completo
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  R$ 97,00
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  180 atividades (3 matérias)
                </p>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Matemática + Português + Ciências
                </div>
              </div>

              {/* Licença Escola */}
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-indigo-200 md:col-span-2 lg:col-span-2">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Licença Escola
                </h3>
                <p className="text-2xl font-bold text-indigo-600 mb-2">
                  R$ 197,00
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Uso ilimitado + Suporte pedagógico + Materiais extras
                </p>
                <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Todos os kits + Suporte
                </div>
              </div>
            </div>

            {/* Formulário de Acesso */}
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔑</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Digite seu Código
                  </h3>
                  <p className="text-gray-600 text-sm">
                    O sistema identificará automaticamente seu produto
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código de Acesso
                    </label>
                    <input
                      type="text"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                      placeholder="Ex: INDMAT2024"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onKeyPress={(e) => e.key === "Enter" && verificarCodigo()}
                    />
                  </div>

                  <button
                    onClick={verificarCodigo}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    🚀 Acessar Meu Produto
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center text-sm text-gray-600">
                    <p className="mb-2">Não recebeu seu código?</p>
                    <a
                      href="mailto:suporte@eduadapta.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      📧 Fale conosco
                    </a>
                  </div>
                </div>

                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-xs text-yellow-800">
                    <strong>💡 Exemplos de códigos:</strong> INDMAT2024 (Mat),
                    INDPORT2024 (Port), INDCIE2024 (Ciê)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{produtos[produtoAtivo].nome} - EduAdapta</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <Header />

        {/* Barra de usuário logado */}
        <div
          className={`bg-${produtos[produtoAtivo].cor}-100 border-b border-${produtos[produtoAtivo].cor}-200`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className={`text-${produtos[produtoAtivo].cor}-800`}>
                ✅ Acesso liberado ao {produtos[produtoAtivo].nome}
              </span>
            </div>
            <button
              onClick={logout}
              className={`text-${produtos[produtoAtivo].cor}-700 hover:text-${produtos[produtoAtivo].cor}-900 text-sm`}
            >
              🚪 Sair
            </button>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-8">
          {/* Kit Individual - Matemática */}
          {produtoAtivo === "individual-matematica" && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🔢{" "}
                  <span className="text-orange-600">
                    Kit Individual - Matemática
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  20 atividades adaptadas de Matemática para Ensino Médio.
                  Focado em situações práticas do cotidiano.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-bold text-orange-800">
                    BNCC: EM13MAT302
                  </h4>
                  <button
                    onClick={() => imprimirKitIndividual("matematica")}
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
                  >
                    🖨️ Imprimir Kit
                  </button>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <p className="text-orange-800">
                    <strong>Objetivo Geral:</strong> Desenvolver o raciocínio
                    matemático através de situações práticas do cotidiano,
                    trabalhando conceitos de função linear, proporcionalidade e
                    interpretação de dados.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kitsIndividuais.matematica.atividades.map(
                    (atividade, index) => (
                      <div
                        key={atividade.id}
                        className="bg-orange-50 p-4 rounded-lg border border-orange-200"
                      >
                        <h5 className="font-semibold mb-2">
                          {index + 1}. {atividade.titulo}
                        </h5>
                        <p className="text-sm text-gray-700 mb-3">
                          {atividade.objetivo}
                        </p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="bg-orange-200 px-2 py-1 rounded">
                            {atividade.tipo}
                          </span>
                          <span className="text-gray-600">
                            {atividade.tempo}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}

          {/* Kit Individual - Português */}
          {produtoAtivo === "individual-portugues" && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  📝{" "}
                  <span className="text-green-600">
                    Kit Individual - Português
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  20 atividades adaptadas de Português para Ensino Médio. Focado
                  em gêneros textuais e interpretação.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-bold text-green-800">
                    BNCC: EM13LP02
                  </h4>
                  <button
                    onClick={() => imprimirKitIndividual("portugues")}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
                  >
                    🖨️ Imprimir Kit
                  </button>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800">
                    <strong>Objetivo Geral:</strong> Desenvolver habilidades de
                    leitura, interpretação e análise de diferentes gêneros
                    textuais, fortalecendo a competência comunicativa e o
                    letramento crítico.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kitsIndividuais.portugues.atividades.map(
                    (atividade, index) => (
                      <div
                        key={atividade.id}
                        className="bg-green-50 p-4 rounded-lg border border-green-200"
                      >
                        <h5 className="font-semibold mb-2">
                          {index + 1}. {atividade.titulo}
                        </h5>
                        <p className="text-sm text-gray-700 mb-3">
                          {atividade.objetivo}
                        </p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="bg-green-200 px-2 py-1 rounded">
                            {atividade.tipo}
                          </span>
                          <span className="text-gray-600">
                            {atividade.tempo}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}

          {/* Kit Individual - Ciências */}
          {produtoAtivo === "individual-ciencias" && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🔬{" "}
                  <span className="text-purple-600">
                    Kit Individual - Ciências
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  20 atividades adaptadas de Ciências para Ensino Médio. Focado
                  em ciência aplicada ao cotidiano.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-bold text-purple-800">
                    BNCC: EM13CNT301
                  </h4>
                  <button
                    onClick={() => imprimirKitIndividual("ciencias")}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
                  >
                    🖨️ Imprimir Kit
                  </button>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                  <p className="text-purple-800">
                    <strong>Objetivo Geral:</strong> Desenvolver o pensamento
                    científico através de situações práticas, conectando
                    conceitos de Biologia, Física e Química com o cotidiano dos
                    estudantes.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kitsIndividuais.ciencias.atividades.map(
                    (atividade, index) => (
                      <div
                        key={atividade.id}
                        className="bg-purple-50 p-4 rounded-lg border border-purple-200"
                      >
                        <h5 className="font-semibold mb-2">
                          {index + 1}. {atividade.titulo}
                        </h5>
                        <p className="text-sm text-gray-700 mb-3">
                          {atividade.objetivo}
                        </p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="bg-purple-200 px-2 py-1 rounded">
                            {atividade.tipo}
                          </span>
                          <span className="text-gray-600">
                            {atividade.tempo}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}

          {/* Kit Completo */}
          {produtoAtivo === "completo" && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  📚 <span className="text-blue-600">Kit Completo</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  180 atividades adaptadas em 3 matérias: Matemática, Português
                  e Ciências. Material completo para todo o Ensino Médio.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Escolha sua Matéria
                </h3>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <button
                    onClick={() => setMateriaAtiva("matematica")}
                    className={`p-6 rounded-lg font-semibold transition-all border-2 ${
                      materiaAtiva === "matematica"
                        ? "bg-blue-200 border-blue-400 text-blue-800"
                        : "bg-blue-100 hover:bg-blue-200 text-blue-800 border-transparent hover:border-blue-300"
                    }`}
                  >
                    <div className="text-3xl mb-2">🔢</div>
                    <div className="text-lg">Matemática</div>
                    <div className="text-sm opacity-75">60 atividades</div>
                  </button>

                  <button
                    onClick={() => setMateriaAtiva("portugues")}
                    className={`p-6 rounded-lg font-semibold transition-all border-2 ${
                      materiaAtiva === "portugues"
                        ? "bg-green-200 border-green-400 text-green-800"
                        : "bg-green-100 hover:bg-green-200 text-green-800 border-transparent hover:border-green-300"
                    }`}
                  >
                    <div className="text-3xl mb-2">📝</div>
                    <div className="text-lg">Português</div>
                    <div className="text-sm opacity-75">60 atividades</div>
                  </button>

                  <button
                    onClick={() => setMateriaAtiva("ciencias")}
                    className={`p-6 rounded-lg font-semibold transition-all border-2 ${
                      materiaAtiva === "ciencias"
                        ? "bg-purple-200 border-purple-400 text-purple-800"
                        : "bg-purple-100 hover:bg-purple-200 text-purple-800 border-transparent hover:border-purple-300"
                    }`}
                  >
                    <div className="text-3xl mb-2">🔬</div>
                    <div className="text-lg">Ciências</div>
                    <div className="text-sm opacity-75">60 atividades</div>
                  </button>
                </div>

                {/* Conteúdo do Kit Selecionado */}
                {kitCompleto[materiaAtiva] && (
                  <div className="border-t pt-8">
                    <div className="flex justify-between items-center mb-6">
                      <h4
                        className={`text-2xl font-bold text-${kitCompleto[materiaAtiva].cor}-800`}
                      >
                        {kitCompleto[materiaAtiva].titulo}
                      </h4>
                      <button
                        onClick={imprimirKitCompleto}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                      >
                        🖨️ Imprimir Kit
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {kitCompleto[materiaAtiva].atividades
                        .slice(0, 12)
                        .map((atividade, index) => (
                          <div
                            key={atividade.id}
                            className={`bg-${kitCompleto[materiaAtiva].cor}-50 p-4 rounded-lg border border-${kitCompleto[materiaAtiva].cor}-200`}
                          >
                            <h5 className="font-semibold mb-2">
                              {index + 1}. {atividade.titulo}
                            </h5>
                            <p className="text-sm text-gray-700 mb-3">
                              {atividade.objetivo}
                            </p>
                            <div className="flex justify-between items-center text-xs">
                              <span
                                className={`bg-${kitCompleto[materiaAtiva].cor}-200 px-2 py-1 rounded`}
                              >
                                {atividade.tipo}
                              </span>
                              <span className="text-gray-600">
                                {atividade.tempo || "15-20min"}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-gray-600 mb-4">
                        Mostrando 12 de{" "}
                        {kitCompleto[materiaAtiva].atividades.length} atividades
                        disponíveis
                      </p>
                      <button
                        onClick={imprimirKitCompleto}
                        className={`bg-${kitCompleto[materiaAtiva].cor}-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-${kitCompleto[materiaAtiva].cor}-700 transition-all`}
                      >
                        📄 Ver Todas as Atividades
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Licença Escola */}
          {produtoAtivo === "escola" && (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🏫 <span className="text-indigo-600">Licença Escola</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Acesso completo para toda a escola + Suporte pedagógico +
                  Materiais extras. Uso ilimitado para todos os professores.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* Kit Individual - Matemática */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🔢</span>
                    <h3 className="text-lg font-bold text-orange-800">
                      Kit Individual - Matemática
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    20 atividades de Matemática
                  </p>
                  <button
                    onClick={() => imprimirKitIndividual("matematica")}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-all text-sm"
                  >
                    🖨️ Imprimir Kit
                  </button>
                </div>

                {/* Kit Individual - Português */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">📝</span>
                    <h3 className="text-lg font-bold text-green-800">
                      Kit Individual - Português
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    20 atividades de Português
                  </p>
                  <button
                    onClick={() => imprimirKitIndividual("portugues")}
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-all text-sm"
                  >
                    🖨️ Imprimir Kit
                  </button>
                </div>

                {/* Kit Individual - Ciências */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🔬</span>
                    <h3 className="text-lg font-bold text-purple-800">
                      Kit Individual - Ciências
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    20 atividades de Ciências
                  </p>
                  <button
                    onClick={() => imprimirKitIndividual("ciencias")}
                    className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-all text-sm"
                  >
                    🖨️ Imprimir Kit
                  </button>
                </div>
              </div>

              {/* Kit Completo */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">📚</span>
                  <h3 className="text-2xl font-bold text-blue-800">
                    Kit Completo
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  180 atividades (3 matérias)
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button
                    onClick={() => setMateriaAtiva("matematica")}
                    className={`p-4 rounded text-sm font-semibold transition-all ${
                      materiaAtiva === "matematica"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-blue-100 hover:bg-blue-200 text-blue-800"
                    }`}
                  >
                    🔢 Matemática
                  </button>
                  <button
                    onClick={() => setMateriaAtiva("portugues")}
                    className={`p-4 rounded text-sm font-semibold transition-all ${
                      materiaAtiva === "portugues"
                        ? "bg-green-200 text-green-800"
                        : "bg-green-100 hover:bg-green-200 text-green-800"
                    }`}
                  >
                    📝 Português
                  </button>
                  <button
                    onClick={() => setMateriaAtiva("ciencias")}
                    className={`p-4 rounded text-sm font-semibold transition-all ${
                      materiaAtiva === "ciencias"
                        ? "bg-purple-200 text-purple-800"
                        : "bg-purple-100 hover:bg-purple-200 text-purple-800"
                    }`}
                  >
                    🔬 Ciências
                  </button>
                </div>

                <button
                  onClick={imprimirKitCompleto}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  🖨️ Imprimir {kitCompleto[materiaAtiva]?.titulo}
                </button>
              </div>

              {/* Benefícios Exclusivos da Licença Escola */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
                  🎁 Benefícios Exclusivos
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">👥</div>
                    <h4 className="font-bold text-indigo-800 mb-2">
                      Uso Ilimitado
                    </h4>
                    <p className="text-sm text-indigo-700">
                      Todos os professores da escola podem usar
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">📞</div>
                    <h4 className="font-bold text-indigo-800 mb-2">
                      Suporte Pedagógico
                    </h4>
                    <p className="text-sm text-indigo-700">
                      Orientação especializada via WhatsApp
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">📋</div>
                    <h4 className="font-bold text-indigo-800 mb-2">
                      Materiais Extras
                    </h4>
                    <p className="text-sm text-indigo-700">
                      Guias, templates e recursos adicionais
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-indigo-100 border border-indigo-200 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-indigo-800 font-semibold">
                      📱 Suporte via WhatsApp:
                    </span>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
                    >
                      💬 Falar com Especialista
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Guia do Professor */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📚 Guia do Professor
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">
                  🎯 Como Usar as Atividades
                </h4>
                <ul className="text-sm space-y-2 text-blue-700">
                  <li>• Imprima as atividades em papel A4</li>
                  <li>• Leia os objetivos antes de aplicar</li>
                  <li>• Adapte o tempo conforme necessário</li>
                  <li>• Use as dicas visuais para explicar</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">
                  ⏰ Sugestões de Tempo
                </h4>
                <ul className="text-sm space-y-2 text-green-700">
                  <li>• Atividades simples: 10-15 min</li>
                  <li>• Atividades médias: 15-25 min</li>
                  <li>• Atividades complexas: 25-35 min</li>
                  <li>• Sempre com pausas se necessário</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
