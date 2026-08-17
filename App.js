import React from "react";
import { createRoot } from "react-dom/client"; 

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -Restaurant Container
 *   -Restaurant Card
 *    -Img
 *    -Name of Restaurant,Rating,cuisne
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

    const Header = () => (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
    const RestaurantCard = () => (
        <div className="res-card">
            <div className="res-logo-container">
                <img
                className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/nqrgrylqtxwz3lxzubkq"
                />
            </div>
            <div className="res-info">
                <h3 className="res-name">Restaurantname</h3>
                <h4 className="res-cuisines">cuisines</h4>
                <div className="res-details">
                    <span className="res-rating">
                        ★ avgRating
                    </span>
                    <span className="res-cost">costForTwo</span>
                </div>
            </div>
        </div>
    )
    const Body = () => (
        <div className="res-container">
            <div className="search">Search</div>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    )
    const AppComponent = () => (
        <div className="app">
            <Header />
            <Body/>
        </div>
        )
    const root = createRoot(document.getElementById("root"));
    root.render(<AppComponent />);