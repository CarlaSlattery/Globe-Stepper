import React from "react";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found.</h2>
      <h3>
        Please go back to the <Link to="/">Homepage</Link>.
      </h3>
    </div>
  );
}
