import React from 'react'

const projects = [
  { id: 'predictive_maintenance', title: 'Predictive Maintenance (Automotive)', desc: 'Sensor-based model to predict component failures and reduce downtime.', tags: ['Automotive','ML'] },
  { id: 'credit_scoring', title: 'Credit Scoring Platform', desc: 'Loan scoring model with fairness checks and API deployment.', tags: ['Finance','Product'] },
  { id: 'trajectory', title: 'Trajectory Prediction', desc: 'Sequence model predicting vehicle trajectories for planning.', tags: ['Autonomy','Deep Learning'] },
  { id: 'ml_deploy', title: 'End-to-End ML Deployment', desc: 'Model served with FastAPI + Docker, with a demo dashboard.', tags: ['MLOps','Deployment'] }
]

export default function Projects(){
  return (
    <section id="projects" className="mt-8">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <article key={p.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-3">
              <a className="text-indigo-600 hover:underline" href="#">Read more</a>
              <a className="text-gray-500 hover:underline" href="#">View repo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
