import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () =>{
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestraunts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    console.log("Body Rendered");
     // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async ()=>{
        try {
            const data = await fetch("https:///www.swiggy.com/dapi/restaurants/list/v5?lat=19.19630&lng=72.96750&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log("-----------json",json)
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
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={()=>{
                        // Filter the restraunt cards and update the UI
                        // searchText
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((restaurant) =>{
                        return restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                        })
                       setFilteredRestaurants(filteredRestaurant); 
                    }
                    }
                    >Onsearch</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res)=> res.info.avgRating >= 4.3
                        )
                        setFilteredRestaurants(filteredList)
                    }
                }
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">

                {
                    filteredRestaurants.map((restaurant) => <RestaurantCard  key={restaurant.info.id} resData={restaurant} />)
                }
                
            </div>
        </div>
      );
    };

export default Body;