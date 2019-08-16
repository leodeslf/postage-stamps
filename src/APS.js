import React, { Component } from 'react';
import STAMPS from './apis/stamps.json';
import Stamp from './Components/Stamp.js';

export default class APS extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
    }
  } */

  render() {
    return (
      <main className="APS">
        <section className="APS__content">
          <h1>Postage Stamps</h1>
          <div className="stamp-gallery">
            {STAMPS.map(item => (
              <Stamp
                key={item.id}
                id={item.id}
                double={item.image.double}
                front={item.image.front}
                back={item.image.back}
                frontMap={item.image.frontMap}
                backMap={item.image.backMap}
                nameStart={item.nameStart}
                nameBold={item.nameBold}
                nameFinish={item.nameFinish}
                cost={item.cost}
                date={item.date}
                owner={item.owner}
                desc={item.desc}
                cameraMan={item.cameraMan} />
            ))}
          </div>
        </section>
      </main>
    )
  }
}
