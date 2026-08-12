import {CalendarOff} from 'lucide-react';
export default function Planning(){return <>
  <h1 className="page-title">Emploi du temps</h1>
  <p className="muted">Année scolaire 2025-2026</p>
  <div className="card planning-empty" style={{marginTop:18}}>
    <div className="planning-empty-icon"><CalendarOff size={34}/></div>
    <h2>Vacances d'été</h2>
    <p className="muted">Aucun cours n'est programmé actuellement. L'année scolaire est terminée et l'emploi du temps est vide pendant la période estivale.</p>
    <div className="summer-status"><span></span> Année 2025-2026 terminée</div>
  </div>
  <div className="card" style={{marginTop:18}}>
    <h3>Historique</h3>
    <p className="muted">Les enseignements de la 1re année de BTS SIO SISR ont été effectués. Les résultats, bulletins et documents restent disponibles dans les rubriques Notes et Documents.</p>
  </div>
</>}
