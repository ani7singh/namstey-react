import React from "react";
import { createRoot } from "react-dom/client"; 

    const Title = () => (
        <h1 className="head">
            Namste React using JSX
        </h1>
    );
    //component composition
        const HeadingComponent = () => (
            <div id="container">
                <Title />
                <h1 className="headingExample">React Functional component</h1>
            </div>
        )
    const root = createRoot(document.getElementById("root"));
    root.render(<HeadingComponent />);