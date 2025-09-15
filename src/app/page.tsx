// src/app/page.tsx
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo à Nossa Loja! 🎉
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Licenças de software originais e seguras
        </p>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8">
          ✅ <strong>Aplicação funcionando perfeitamente!</strong>
        </div>
      </div>

      {/* Cards de Teste */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Microsoft Office</h3>
          <p className="text-gray-600 mb-4">Pacote completo de produtividade</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-green-600">R$ 299,90</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Comprar
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Adobe Photoshop</h3>
          <p className="text-gray-600 mb-4">Editor de imagens profissional</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-green-600">R$ 199,90</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Comprar
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-2">Windows 11 Pro</h3>
          <p className="text-gray-600 mb-4">Sistema operacional completo</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-green-600">R$ 159,90</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Comprar
            </button>
          </div>
        </div>
      </div>

      {/* Links de Navegação */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Navegação de Teste</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link 
            href="/products" 
            className="bg-blue-500 text-white p-3 rounded text-center hover:bg-blue-600 transition-colors"
          >
            📦 Produtos
          </Link>
          <Link 
            href="/checkout" 
            className="bg-green-500 text-white p-3 rounded text-center hover:bg-green-600 transition-colors"
          >
            🛒 Checkout
          </Link>
          <Link 
            href="/dashboard" 
            className="bg-purple-500 text-white p-3 rounded text-center hover:bg-purple-600 transition-colors"
          >
            📊 Dashboard
          </Link>
          <Link 
            href="/login" 
            className="bg-gray-500 text-white p-3 rounded text-center hover:bg-gray-600 transition-colors"
          >
            🔑 Login
          </Link>
        </div>
      </div>

      {/* Status do Sistema */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Status do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between">
            <span>Next.js:</span>
            <span className="text-green-600 font-semibold">✅ Funcionando</span>
          </div>
          <div className="flex justify-between">
            <span>TypeScript:</span>
            <span className="text-green-600 font-semibold">✅ Ativo</span>
          </div>
          <div className="flex justify-between">
            <span>Tailwind CSS:</span>
            <span className="text-green-600 font-semibold">✅ Configurado</span>
          </div>
          <div className="flex justify-between">
            <span>App Router:</span>
            <span className="text-green-600 font-semibold">✅ Ativo</span>
          </div>
        </div>
      </div>
    </div>
  )
}