import React from "react";
import { CSSTransition } from 'react-transition-group';

import "./Modal.css";

const animationTiming = {
  enter: 300,
  exit: 1000
};

const modal = props => {
  return (
    <CSSTransition
      in={props.show}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed',
      }}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit>
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
      </button>
      </div>
    </CSSTransition >
  );
};

export default modal;
