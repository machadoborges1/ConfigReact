
import React from "react";
import { Children } from "react/cjs/react.production.min";

export default function Header({ title, children }) { //children é todo conteuúdo  //e é palavra exclusiva
  return (
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  );
}

/** 
 * Da na mesma que de cima!
 * 
import React from "react";

export default function Header(propss) {
  return (
    <header>
      <h1>
        {propss.title}
      </h1>
    </header>
  );
}
 */