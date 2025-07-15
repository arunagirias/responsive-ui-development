

import React from 'react';

const Testimonials = () => (
  <section className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">What People Say</h2>
      <div className="row">
        <div className="col-md-6">
          <blockquote className="blockquote">
            <p>"This is the best UI I've used!"</p>
            <footer className="blockquote-footer">Jane Doe</footer>
          </blockquote>
        </div>
        <div className="col-md-6">
          <blockquote className="blockquote">
            <p>"Clean and easy to integrate."</p>
            <footer className="blockquote-footer">John Smith</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;