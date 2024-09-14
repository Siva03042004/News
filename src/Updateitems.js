import React from 'react';

export const Updateitems = ({ title, desc, img, url }) => {
  return (
    <div className="card bg-dark text-dark d-inline m-0">
      <img src={img ? img : 'no image'} className="card-img-top" alt="..." />
      <div className="card-body text-dark">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={url} className="btn btn-primary">
          Show more
        </a>
      </div>
    </div>
  );
};
