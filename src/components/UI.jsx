import {X} from 'lucide-react';
export const Button=({children,className='',...props})=><button className={`btn ${className}`} {...props}>{children}</button>;
export const Badge=({children,tone=''})=><span className={`pill ${tone}`}>{children}</span>;
export const ProgressBar=({value})=><div className="progress"><span style={{width:`${value}%`}}/></div>;
export const Modal=({title,onClose,children})=><div className="modal-overlay" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className="modal"><div className="row space-between"><h2>{title}</h2><button className="icon-btn" onClick={onClose}><X size={18}/></button></div>{children}</div></div>;
