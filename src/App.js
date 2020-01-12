import React, { Component } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming = {
  enter: 300,
  exit: 2000
};

class App extends Component {
  state = {
    modalIsOpen: false,
    showDiv: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() => this.setState(prevState => ({ showDiv: !prevState.showDiv }))}>Toggle</button>
        <Transition
          in={this.state.showDiv}
          timeout={animationTiming}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("ENTER")}
        >
          {state =>
            <div
              style={{
                height: '100px',
                width: '100px',
                backgroundColor: 'red',
                margin: 'auto',
                transition: 'opacity 1s',
                transitionTimingFunction: 'ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }}>

            </div>
          }
        </Transition>
        <Transition mountOnEnter unmountOnExit in={this.state.modalIsOpen} timeout={animationTiming}>
          {state =>
            <Modal show={state} closed={this.closeModal} />}
        </Transition>

        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div >
    );
  }
}

export default App;
