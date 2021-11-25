import React from "react";

export default function Main() {
  return (
    <div className="container__info">
      <h2 className="container__info-name">Elian Avalos</h2>
      <p className="container__info-rol">Frontend Developer</p>
      <small className="container__info-website">NO Website</small>
      <div className="container__info-text">
        <section>
          <h3 className="container__info-text-about">About</h3>
          <p className="container__info-text-interests">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quidem
            mollitia deserunt natus, totam ad itaque facere accusamus porro
            ipsam sed facilis, optio omnis minima.
          </p>
        </section>
        <section>
          <h3 className="container__info-text-about">Interests</h3>
          <p className="container__info-text-interests">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            temporibus aut quas. Provident ipsa praesentium ex eos esse deleniti
            illum sed, officia voluptate impedit. Soluta?
          </p>
        </section>
      </div>
    </div>
  );
}
