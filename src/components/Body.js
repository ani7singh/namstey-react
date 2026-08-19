import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import { useState } from "react";
const Body = () =>{
    // Local State Variable - Super powerful variable
const [listOfRestaurants, setListOfRestraunt] = useState(restaurantsList);
      return (
            <div className="res-container">
                <div className="filter">
                    <button
                      className="filter-btn"
                      onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res)=> res.info.avgRating >= 4.3
                        )
                        setListOfRestraunt(filteredList)
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