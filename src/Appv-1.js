import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onsetRating={setMovieRating} />
      <p>You rated this movie {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating size={60} color="red" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
