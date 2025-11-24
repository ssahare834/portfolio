import React from 'react'

const skills = [
  'Python', 'SQL', 'Scikit-learn', 'PyTorch', 'Time Series', 'MLOps', 'Docker', 'FastAPI', 'Streamlit', 'A/B Testing', 'Product Analytics'
]

export default function Skills(){
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map(s => (
          <div key={s} className="bg-white p-3 rounded-lg shadow-sm text-sm">{s}</div>
        ))}
      </div>
    </section>
  )
}
