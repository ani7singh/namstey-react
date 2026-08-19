import React from "react";
import { createRoot } from "react-dom/client"; 
/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
    const Title = () => (
        <h1 className="head">
            Namste React using JSX
        </h1>
    );
        //used curly braces which uses return and mentioned below function give the same result
        // const HeadingComponent1 = () => {
        //     return <h1 className="headingExample">React Functional component</h1>
        // }
        //jsx uses round braces for muktiple lines
    //component composition
        const HeadingComponent = () => (
            <div id="container">
                <Title />
                <h1 className="headingExample">React Functional component</h1>
            </div>
        )
    const root = createRoot(document.getElementById("root"));
    root.render(<HeadingComponent />);