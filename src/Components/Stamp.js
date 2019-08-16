import React, { Component } from 'react'
import * as PIXI from 'pixi.js';

const W = 340;
const H = 210;
const FACTOR = 9;
//const DIVISOR = window.innerWidth * 0.045;

export default class Stamp extends Component {
  componentDidMount() {
    // App
    const BACK_APP = new PIXI.Application({ width: W, height: H });
    BACK_APP.view.className = 'back';
    document.querySelector(`#stamp-${this.props.id} .layer--back`).appendChild(BACK_APP.view);
    // Image
    const BACK = new PIXI.Sprite.from(this.props.back);
    const BACK_MAP = new PIXI.Sprite.from(this.props.backMap);
    BACK_APP.stage.addChild(BACK, BACK_MAP);
    // Displacement
    const BACK_DIS_FIL = new PIXI.filters.DisplacementFilter(BACK_MAP);
    BACK_APP.stage.filters = [BACK_DIS_FIL];
    BACK_DIS_FIL.scale.x = 0;
    BACK_DIS_FIL.scale.y = 0;

    if (!this.props.double) {
      window.addEventListener('mousemove', e => {
        // Interaction
        BACK_DIS_FIL.scale.x = (((e.clientX / window.innerWidth) - 0.5) * 2) * FACTOR;
        BACK_DIS_FIL.scale.y = (((e.clientY / window.innerHeight) - 0.5) * 2) * FACTOR;
      });
    } else {
      // Add "background" staff
      // App
      const FRONT_APP = new PIXI.Application({ width: W, height: H, transparent: true });
      FRONT_APP.view.className = 'front';
      document.querySelector(`#stamp-${this.props.id} .layer--front`).appendChild(FRONT_APP.view);
      // Image
      const FRONT = new PIXI.Sprite.from(this.props.front);
      const FRONT_MAP = new PIXI.Sprite.from(this.props.frontMap);
      FRONT_APP.stage.addChild(FRONT, FRONT_MAP);
      // Displacement
      const FRONT_DIS_FIL = new PIXI.filters.DisplacementFilter(FRONT_MAP);
      FRONT_APP.stage.filters = [FRONT_DIS_FIL];
      FRONT_DIS_FIL.scale.x = 0;
      FRONT_DIS_FIL.scale.y = 0;

      window.addEventListener('mousemove', e => {
        // Interaction
        const SCALE_X = (((e.clientX / window.innerWidth) - 0.5) * 2) * FACTOR;
        const SCALE_Y = (((e.clientY / window.innerHeight) - 0.5) * 2) * FACTOR;
        BACK_DIS_FIL.scale.x = SCALE_X;
        BACK_DIS_FIL.scale.y = SCALE_Y;
        FRONT_DIS_FIL.scale.x = SCALE_X;
        FRONT_DIS_FIL.scale.y = SCALE_Y;
      });
    }
  }

  render() {
    return (
      <div className="stamp">
        <input id={`stamp__chk-flip-${this.props.id}`}
          className="stamp__chk-flip"
          type="checkbox" ></input>
        <label className="stamp__lbl-flip"
          htmlFor={`stamp__chk-flip-${this.props.id}`}>
        </label>
        <div className="stamp__front-face" id={`stamp-${this.props.id}`}>
          <div className="stamp__layers" id={`stamp__layers--${this.props.id}`}>
            <div className="layer--front">
              {/* view here */}
            </div>
            <div className="layer--back">
              {/* view bg here */}
            </div>
            <div className="layer--labels">
              <p className="label--name">
                {`${this.props.nameStart}`}
                <span className="label--name__bold">
                  {` ${this.props.nameBold}`}
                </span>
                {` ${this.props.nameFinish}`}
              </p>
              <p className="label--cost">
                {this.props.cost}<span className="label--cost__cent">&#162;</span>
              </p>
              <p className="label--owner">
                {this.props.owner}
              </p>
              <p className="label--date">
                {this.props.date}
              </p>
              <p>
                <span className="cosax" id={`x__${this.props.id}`}></span>
                <span className="cosay" id={`y__${this.props.id}`}></span>
              </p>
            </div>
          </div>
        </div>
        <div className="stamp__back-face">
          <div className="back-face__content">
            <p className="desc">{this.props.desc}</p><br />
            <p className="cameraman">{this.props.cameraMan}</p>
          </div>
        </div>
      </div>
    )
  }
}

