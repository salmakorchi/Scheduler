import React from 'react';
import './Modal.css';
const modal = props=>(
    <React.Fragment>
    <div className="model">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canCancel && (
        <button className="btn  btn-primary" onClick={props.onCancel}>
          Cancel
        </button>
      )}
      {props.canConfirm && (
        <button className="btn btn-primary " onClick={props.onConfirm}>
         {props.confirmText}
        </button>
      )}
    </section>
  </div>
  </React.Fragment>
);
export default modal;