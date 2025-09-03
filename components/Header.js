import Link from "next/link";

export default function Header() {
  // Links temporários - substitua pelos seus links reais do Kiwify
  const kiwifyLinks = {
    completo: "https://pay.kiwify.com.br/zj7MksG", // Substitua pelo seu link
    matematica: "https://pay.kiwify.com.br/txcrsAa",
    portugues: "https://pay.kiwify.com.br/DV9ypUt",
    ciencias: "https://pay.kiwify.com.br/cvNKE4d",
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">EduAdapta</h1>
              <p className="text-sm text-gray-600">
                Kits de Atividades Inclusivas
              </p>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              href="/acesso"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              🔐 Área do Aluno
            </Link>
            <a
              href={kiwifyLinks.completo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all"
            >
              💰 Comprar Kits
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
