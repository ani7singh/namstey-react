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
const restaurantsList = [{
                    "info": {
                      "id": "9871",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/f8cf8639-aac9-41a6-aec3-e72173005838_9871.JPG",
                      "locality": "Kapurbavdi",
                      "areaName": "Thane West",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.1,
                      "parentId": "721",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "13K+",
                      "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-18 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.5",
                          "ratingCount": "16K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    }
                  },
                  {
                    "info": {
                      "id": "43308",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "11am To 1am",
                      "areaName": "Thane Panchpakhadi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "61955",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "23K+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-18 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                            "description": "Top-rated for Chinese, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Chinese, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    }
                  },
                  {
                    "info": {
                      "id": "692307",
                      "name": "Good Flippin' Burgers",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/54711f34-74ca-4abc-94cd-9622da09cd55_692307.JPG",
                      "locality": "Waghle thane",
                      "areaName": "Thane Panchpakhadi",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "parentId": "11748",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.8K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-18 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Top-rated for Burger, based on user votes."
                          },
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                            "description": "Top-rated among newcomers, based on user votes."
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Burger, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated among newcomers, based on user votes.",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹195"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    }
                  },
                  {
                    "info": {
                      "id": "47942",
                      "name": "Charcoal Eats - Biryani & Beyond",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/9969e54b-494c-41ff-9722-7b140eb9c7be_47942.jpg",
                      "locality": "Near Sulochanadevi Singhania School",
                      "areaName": "Samata Nagar",
                      "costForTwo": "₹499 for two",
                      "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "North Indian",
                        "Mughlai"
                      ],
                      "avgRating": 4.3,
                      "parentId": "5338",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "9.2K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-18 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                            "description": "Top-rated for Biryani, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Biryani, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    }
                  },
                  {
                    "info": {
                      "id": "433401",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/ef92324f-ca9d-462e-ae18-02f2fc5ade45_433401.JPG",
                      "locality": "Mulund West",
                      "areaName": "Mulund West",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4,
                      "parentId": "547",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "7.0K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-08-18 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "849"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    }
                  }];
    const Header = () => {
       return (
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
    };
    const RestaurantCard = (props) => {
        {console.log(props)}
        const {resData} = props;
        const {name,cuisines,avgRating,costForTwo} = resData?.info;
        return ( <div className="res-card">
            <div className="res-logo-container">
                <img
                className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/"+ resData.info.cloudinaryImageId}
                />
            </div>
            <div className="res-info">
                <h3 className="res-name">{name}</h3>
                <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
                <div className="res-details">
                    <span className="res-rating">
                        {avgRating}
                    </span>
                    <span className="res-cost">{costForTwo}</span>
                </div>
            </div>
        </div>
        );
    };

    //not using keys (not acceptable) <<< index as key <<<<< unique id (best practice)
    const Body = () =>{
        return (
            <div className="res-container">
                <div className="search">Search</div>
                {
                  // .map((restaurant,index) so using index for keys its not recommended
                    // console.log(restaurantsList.map((restaurant) => console.log(restaurant)))
                    restaurantsList.map((restaurant) => <RestaurantCard  key={restaurant.info.id} resData={restaurant} />)
                }
                
            </div>
        );
    };
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