import React from "react";

const Card = () => {
  return (
    <main data-testid="card" className="d-flex gap-4 p-5">
      <div
        className="card text-white bg-dark mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">ماهان جعفری</div>
        <div className="card-body">
          <p className="card-text">فرانت‌اند دولوپر</p>
          <h5 className="card-title">2000-04-18</h5>
        </div>
      </div>
    </main>
  );
};

export default Card;
