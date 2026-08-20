import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () =>{
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestraunts] = useState([]);

     // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async ()=>{
        try {
        const data = await fetch("https:///www.swiggy.com/dapi/restaurants/list/v5?lat=19.19630&lng=72.96750&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants||
        []);
        }
        catch (error) {
        console.error("Failed to fetch Swiggy API:", error);
        }
    }
    //conditional rendering
    return (!listOfRestaurants || listOfRestaurants.length === 0 ) ? (
        <Shimmer />
    ) : 
       (
            <div className="res-container">
                <div className="filter">
                    <button
                      className="filter-btn"
                      onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res)=> res.info.avgRating >= 4.3
                        )
                        setListOfRestraunts(filteredList)
                    }
                    }
                    >
                        Top Rated Restaurant
                    </button>
                </div>
                {
                    listOfRestaurants.map((restaurant) => <RestaurantCard  key={restaurant.info.id} resData={restaurant} />)
                }
                
            </div>
      );
    };

export default Body;