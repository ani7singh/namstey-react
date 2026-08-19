import React from "react";
import { createRoot } from "react-dom/client"; 
import { Header } from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
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
    const AppComponent = () =>{
        return  (
            <div className="app">
                <Header />
                <Body/>
            </div>
        );
    }; 
    const root = createRoot(document.getElementById("root"));
    root.render(<AppComponent />);