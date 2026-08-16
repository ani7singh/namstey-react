import React from "react";
import { createRoot } from "react-dom/client"; 

    const jsxHeading = (
        <h1 className="head">
            Namste React using JSX
        </h1>
    );
    console.log(jsxHeading)
    const root = createRoot(document.getElementById("root"));
    root.render(jsxHeading);