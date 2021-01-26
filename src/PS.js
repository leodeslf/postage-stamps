import React, { Component } from 'react';
import STAMPS from './apis/stamps.json';
import Stamp from './Components/Stamp.js';

export default class PS extends Component {
  render() {
    return (
      <main className="PS">
        <section className="PS__content">
          <h1>Postage Stamps</h1>
          <div className="stamp-gallery">
            {STAMPS.map(item => (
              <Stamp
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </section>
      </main>
    )
  }
}
