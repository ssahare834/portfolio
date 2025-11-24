import React from 'react'

export default function Hero(){
  return (
    <header className="hero-gradient text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Haura Jilan</h1>
        <p className="mt-3 text-xl text-gray-200">AI · Data · Product — Automotive & FinTech</p>
        <div className="mt-6 flex gap-4">
          <a className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded" href="https://github.com/YOUR_GITHUB">GitHub</a>
          <a className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded" href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>
          <a className="inline-block bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white" href="#projects">Projects</a>
        </div>
      </div>
    </header>
  )
}
