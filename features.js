

import React from 'react';

const Features = () => (
  <section className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Features</h2>
      <div className="row">
        {["Fast", "Responsive", "Reusable"].map((feature, i) => (
          <div className="col-md-4 text-center" key={i}>
            <div className="card p-3 shadow-sm">
              <h4>{feature}</h4>
              <p>Our UI components are {feature.toLowerCase()} and easy to scale.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;