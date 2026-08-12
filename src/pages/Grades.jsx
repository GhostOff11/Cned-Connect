import {useState} from 'react';
import {semesters, annualAverage} from '../data/grades';
import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from 'recharts';
import {Badge} from '../components/UI';
import {Download, Trophy} from 'lucide-react';

const fmt=n=>Number(n).toFixed(2).replace(/\.00$/,'').replace('.',',');
export default function Grades(){
  const [active,setActive]=useState('S1');
  const semester=semesters.find(s=>s.id===active);
  const chartData=semesters.map(s=>({name:s.id,moyenne:s.average}));
  return <>
    <div className="row space-between" style={{flexWrap:'wrap'}}>
      <div><h1 className="page-title">Notes & bulletins</h1><p className="muted">Résultats officiels — BTS SIO SISR 2025-2026</p></div>
      <div className="grades-actions">
        <a className="btn secondary bulletin-download" href="/BultinV1.pdf" download="Bulletin_Reyan_Lassoued_2025-2026.pdf"><Download size={17}/> Télécharger le bulletin PDF</a>
        <a className="btn secondary bulletin-download" href="/ClassmentV2.pdf" download="Classement_Reyan_Lassoued_2025-2026.pdf"><Trophy size={17}/> Télécharger le classement PDF</a>
        <div className="annual-average"><span>Moyenne annuelle</span><strong>{fmt(annualAverage)} / 20</strong></div>
      </div>
    </div>

    <div className="semester-tabs">
      {semesters.map(s=><button key={s.id} className={active===s.id?'active':''} onClick={()=>setActive(s.id)}>{s.id==='S1'?'Semestre 1':'Semestre 2'} <span>{fmt(s.average)}/20</span></button>)}
    </div>

    <div className="card" style={{marginTop:18}}>
      <div className="row space-between" style={{flexWrap:'wrap',marginBottom:14}}><div><h3 style={{marginBottom:4}}>{semester.title}</h3><div className="muted">Détail de toutes les évaluations et moyenne par matière</div></div><Badge tone={semester.id==='S2'?'green':'gray'}>{semester.decision}</Badge></div>
      <div className="table-wrap">
        <table className="table grades-table"><thead><tr><th>Matière</th><th>Professeur</th><th>Coef.</th><th>Devoir 1</th><th>Devoir 2</th><th>Examen</th><th>Moyenne</th></tr></thead>
        <tbody>{semester.grades.map(g=><tr key={g.subject}><td><strong>{g.subject}</strong></td><td>{g.teacher}</td><td>{g.coefficient}</td><td>{fmt(g.assignment1)}</td><td>{fmt(g.assignment2)}</td><td>{fmt(g.exam)}</td><td><strong>{fmt(g.average)} / 20</strong></td></tr>)}</tbody>
        <tfoot><tr><td colSpan="6"><strong>MOYENNE GÉNÉRALE — {semester.id==='S1'?'SEMESTRE 1':'SEMESTRE 2'}</strong></td><td><strong>{fmt(semester.average)} / 20</strong></td></tr></tfoot></table>
      </div>
    </div>

    <div className="grid grid-2" style={{marginTop:18}}>
      <div className="card"><h3>Évolution annuelle</h3><div style={{height:280}}><ResponsiveContainer><LineChart data={chartData} margin={{top:15,right:20,left:-10,bottom:5}}><CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" opacity={.55}/><XAxis dataKey="name" stroke="#64748b"/><YAxis domain={[0,20]} stroke="#64748b"/><Tooltip/><Line type="monotone" dataKey="moyenne" stroke="#2563eb" strokeWidth={4} dot={{r:6,fill:'#2563eb',stroke:'#FFFFFF',strokeWidth:2}}/></LineChart></ResponsiveContainer></div></div>
      <div className="card"><h3>Bilan de l'année</h3><div className="year-summary"><div><span>Semestre 1</span><strong>14,52 / 20</strong></div><div><span>Semestre 2</span><strong>15,24 / 20</strong></div><div className="final"><span>Moyenne annuelle indicative</span><strong>14,88 / 20</strong></div></div><p className="muted">Progression de +0,72 point entre le semestre 1 et le semestre 2.</p></div>
    </div>

    <div className="card ranking-summary" style={{marginTop:18}}>
      <div className="row space-between" style={{flexWrap:'wrap',gap:12}}>
        <div><h3 style={{marginBottom:4}}>Classement de la classe</h3><div className="muted">BTS SIO — 1re année, option SISR · 20 apprenants</div></div>
        <a className="btn secondary bulletin-download" href="/ClassmentV2.pdf" download="Classement_Reyan_Lassoued_2025-2026.pdf"><Download size={17}/> Télécharger le PDF</a>
      </div>
      <div className="ranking-cards">
        <div><span>Semestre 1</span><strong>5e</strong><small>14,52 / 20</small></div>
        <div><span>Semestre 2</span><strong>4e</strong><small>15,24 / 20</small></div>
        <div><span>Classement général</span><strong>5e</strong><small>14,88 / 20</small></div>
      </div>
    </div>
  </>
}
