import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "../ShimmerUI/shimmer-ui";

const ResMenu = () => {
  const { resId } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("Restaurant ID from URL:", resId);

  useEffect(() => {
    if (resId) {
      fetchMenuData();
    }
  }, [resId]); // Fetch new menu data whenever resId changes

  const fetchMenuData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:3001/restaurants/${resId}`
      );

      console.log("Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Menu Data:", data);
      setMenuData(data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
      setError(error.message || "Failed to fetch menu");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ShimmerUI />;
  if (error) return <div className="resMenu error">Error: {error}</div>;
  if (!menuData) return <div className="resMenu">No menu data available</div>;

  return (
    <div className="resMenu">
      <h1>{menuData?.name || "Restaurant Menu"}</h1>
      <h3>{menuData?.cuisines?.join(", ") || "Cuisine"}</h3>
      <h4>Ratings: {menuData?.avgRating || "N/A"}/5</h4>
      <h2>Menu Items</h2>
      <ul>
        {menuData?.menu?.map(item => {
            return <li key={item?.id}>{item?.name} - Rs.{item?.price / 100}</li>;
        })}
      </ul>
    </div>
  );
};

export default ResMenu;