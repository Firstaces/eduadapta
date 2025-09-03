export const atividades = {
  matematica: {
    titulo: "Kit Matemática - Função Afim (BNCC: EM13MAT302)",
    cor: "blue",
    atividades: [
      {
        id: 1,
        titulo: "Preço do Combustível ⛽",
        tipo: "calculo",
        conteudo: {
          descricao: "Posto de Gasolina",
          preco: "Preço por litro: R$ 5,00",
          exercicios: [
            { pergunta: "10 litros = R$ ___", dica: "(10 × 5)" },
            { pergunta: "20 litros = R$ ___", dica: "(20 × 5)" },
            { pergunta: "30 litros = R$ ___", dica: "(30 × 5)" },
          ],
        },
        objetivo: "Compreender relação linear entre quantidade e preço total.",
      },
      {
        id: 2,
        titulo: "Gráfico Simples 📊",
        tipo: "interpretacao",
        conteudo: {
          descricao: "Temperatura da Semana",
          dados: [
            { dia: "SEG", temp: "25°C" },
            { dia: "TER", temp: "30°C" },
            { dia: "QUA", temp: "28°C" },
          ],
          perguntas: [
            "Qual foi o dia mais quente? ___",
            "Qual foi o dia mais frio? ___",
          ],
        },
        objetivo: "Interpretar dados em tabelas e identificar variações.",
      },
    ],
  },
  portugues: {
    titulo: "Kit Português - Interpretação de Texto (BNCC: EM13LP01)",
    cor: "green",
    atividades: [
      {
        id: 1,
        titulo: "Notícia Simples 📰",
        tipo: "interpretacao",
        conteudo: {
          titulo: "CHUVA FORTE NA CIDADE",
          texto:
            "Ontem choveu muito na nossa cidade. As ruas ficaram alagadas. Os bombeiros ajudaram as pessoas. Hoje o sol voltou.",
          questoes: [
            {
              pergunta: "Quando choveu?",
              opcoes: ["Hoje", "Ontem"],
              resposta: 1,
            },
            {
              pergunta: "Quem ajudou as pessoas?",
              opcoes: ["Polícia", "Bombeiros"],
              resposta: 1,
            },
          ],
        },
        objetivo: "Compreender informações principais de textos jornalísticos.",
      },
      {
        id: 2,
        titulo: "Tipos de Texto 📚",
        tipo: "classificacao",
        conteudo: {
          textos: [
            {
              letra: "A",
              conteudo:
                "Misture os ingredientes. Leve ao forno por 30 minutos.",
              opcoes: ["Receita", "Poesia"],
            },
            {
              letra: "B",
              conteudo: "Era uma vez uma princesa que morava em um castelo...",
              opcoes: ["Notícia", "História"],
            },
          ],
        },
        objetivo:
          "Identificar diferentes gêneros textuais e suas características.",
      },
    ],
  },
  ciencias: {
    titulo: "Kit Biologia - Ecossistemas (BNCC: EM13CNT207)",
    cor: "purple",
    atividades: [
      {
        id: 1,
        titulo: "Cadeia Alimentar 🌱",
        tipo: "sequencia",
        conteudo: {
          ambiente: "Floresta Brasileira",
          cadeia: [
            {
              elemento: "🌱",
              nome: "PLANTAS",
              tipo: "Produtores",
              cor: "green",
            },
            {
              elemento: "🐰",
              nome: "COELHO",
              tipo: "Come plantas",
              cor: "yellow",
            },
            { elemento: "🐺", nome: "LOBO", tipo: "Come coelho", cor: "red" },
          ],
          pergunta: "O que acontece se não houver plantas?",
        },
        objetivo: "Compreender relações de dependência nos ecossistemas.",
      },
      {
        id: 2,
        titulo: "Poluição Ambiental 🌍",
        tipo: "classificacao",
        conteudo: {
          titulo: "Problemas Ambientais",
          itens: [
            {
              emoji: "🏭",
              texto: "Fumaça das fábricas",
              categoria: "Polui o ar",
            },
            { emoji: "🗑️", texto: "Lixo no rio", categoria: "Polui a água" },
            {
              emoji: "🌳",
              texto: "Plantar árvores",
              categoria: "Ajuda o meio ambiente",
            },
          ],
        },
        objetivo: "Identificar causas e soluções para problemas ambientais.",
      },
    ],
  },
};

export const kiwifyLinks = {
  matematica: "https://pay.kiwify.com.br/txcrsAa",
  portugues: "https://pay.kiwify.com.br/DV9ypUt",
  ciencias: "https://pay.kiwify.com.br/cvNKE4d",
  completo: "https://pay.kiwify.com.br/zj7MksG",
  escola: "https://pay.kiwify.com.br/E07JP7j",
};
