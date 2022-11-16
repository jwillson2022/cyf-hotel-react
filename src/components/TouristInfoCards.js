import React from "react";

function TouristInfoCards() {
  return (
    <div className="tourist-main">
      <div>
        <img />
        <h2>Glasgow</h2>
        <p className="summary" />
        <button>More Info</button>
      </div>

      <div>
        <img />
        <h2>Manchester</h2>
        <p className="summary" />
        <button>More Info</button>
      </div>
      <div>
        <img />
        <h2>London</h2>
        <p className="summary">
          London is a famous and historic city. It is the capital of England in
          the United Kingdom. The city is quite popular for international
          tourism because London is home to one of the oldest-standing
          monarchies in the western hemisphere.
        </p>
        <button>More Info</button>
      </div>
    </div>
  );
}

export default TouristInfoCards;
