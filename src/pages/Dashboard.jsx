import {useNavigate} from 'react-router-dom';
import {annualAverage, semester1, semester2} from '../data/grades';
import {Badge,Button,ProgressBar} from '../components/UI';

export default function Dashboard(){
  const nav=useNavigate();
  return <>
    <div className="summer-banner">
      <div>
        <div className="eyebrow">Année scolaire 2025-2026 terminée</div>
        <h1 className="page-title">Bonjour Reyan 👋</h1>
        <p>Vacances d'été — votre espace reste accessible pour consulter vos résultats et vos documents.</p>
      </div>
      <Badge tone="green">Été 2026</Badge>
    </div>

    <div className="grid grid-4" style={{marginTop:20}}>
      <div className="card accent-top-teal"><span className="muted">Moyenne annuelle</span><div className="stat-value">{annualAverage.toFixed(2).replace('.',',')} / 20</div><div className="muted">Bilan indicatif de l'année</div></div>
      <div className="card"><span className="muted">Semestre 1</span><div className="stat-value">{semester1.average.toFixed(2).replace('.',',')} / 20</div><Badge tone="gray">{semester1.decision}</Badge></div>
      <div className="card"><span className="muted">Semestre 2</span><div className="stat-value">{semester2.average.toFixed(2).replace('.',',')} / 20</div><Badge tone="green">{semester2.decision}</Badge></div>
      <div className="card"><span className="muted">Progression annuelle</span><div className="stat-value">100 %</div><ProgressBar value={100}/><div className="muted" style={{marginTop:8}}>1re année terminée</div></div>
    </div>

    <div className="grid grid-2" style={{marginTop:18}}>
      <div className="card empty-planning">
        <div className="empty-icon">☀</div>
        <h3>Aucun emploi du temps actuellement</h3>
        <p className="muted">Les cours de l'année 2025-2026 sont terminés. Aucun cours, devoir ou examen à venir n'est programmé pendant les vacances d'été.</p>
        <Button onClick={()=>nav('/notes')}>Consulter mes résultats</Button>
      </div>
      <div className="card">
        <h3>Dernières informations</h3>
        <div className="list">
          <div className="list-item"><strong>Bulletin du semestre 2 disponible</strong><div className="muted">Moyenne générale : 15,24 / 20</div></div>
          <div className="list-item"><strong>Bilan annuel publié</strong><div className="muted">Moyenne annuelle indicative : 14,88 / 20</div></div>
          <div className="list-item"><strong>Conseil de classe</strong><div className="muted">Décision : Félicitations</div></div>
          <div className="list-item"><strong>Année scolaire terminée</strong><div className="muted">Votre espace reste disponible pendant l'été.</div></div>
        </div>
      </div>
    </div>

    <div className="card" style={{marginTop:18}}>
      <div className="row space-between" style={{flexWrap:'wrap'}}><div><h3 style={{marginBottom:6}}>Bilan de l'année</h3><p className="muted" style={{margin:0}}>Une progression régulière entre les deux semestres, avec des résultats particulièrement solides dans les matières techniques.</p></div><Button className="secondary" onClick={()=>nav('/notes')}>Voir toutes les notes</Button></div>
    </div>
  </>
}
