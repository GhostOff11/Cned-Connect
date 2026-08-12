import { useState } from 'react';
import { DEMO_USER } from '../data/config';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState(DEMO_USER.email);
  const [password, setPassword] = useState(DEMO_USER.password);
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();

    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      sessionStorage.setItem('bts-session', '1');
      onLogin();
    } else {
      setError('Identifiants incorrects.');
    }
  };

  return (
    <div className="login-page">
      <section className="login-visual">
        <div>
          <img className="login-logo" src="/logo-cn.png" alt="Logo CNED" />
          <h1>CNED Connect</h1>
          <p style={{ fontSize: 20, opacity: 0.85 }}>
            Espace étudiant — BTS à distance
          </p>
          <p style={{ maxWidth: 520, opacity: 0.75 }}>
            Cours, devoirs, planning, résultats et vie scolaire réunis dans un
            espace simple et moderne.
          </p>
        </div>
      </section>

      <section className="login-box">
        <form className="login-card" onSubmit={submit}>
          <h1>Connexion</h1>
          <p className="muted">Accédez à votre espace étudiant.</p>

          {error && <div className="error">{error}</div>}

          <label className="field">
            Adresse e-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="field">
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button className="btn" style={{ width: '100%', marginTop: 8 }}>
            Se connecter
          </button>
        </form>
      </section>
    </div>
  );
}
