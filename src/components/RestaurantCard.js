import { CDN_URL } from "../utils/constant";

    const RestaurantCard = (props) => {
        const {resData} = props;
        const {name, cuisines, avgRating, costForTwo, sla: { deliveryTime }} = resData?.info;
        return ( <div className="res-card">
            <div className="res-logo-container">
                <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + resData.info.cloudinaryImageId}
                />
            </div>
            <div className="res-info">
                <h3 className="res-name">{name}</h3>
                <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
                <h4 className="res-cost">{costForTwo}</h4>
                <div className="res-details">
                    <span className="res-rating">
                        {avgRating}
                    </span>
                     <span className="res-delivery-time">{`${deliveryTime} mins`}</span>
                </div>
            </div>
        </div>
        );
    };
export default RestaurantCard;