import RestoCardComp from "../RestoCard/Resto-card-comp";
import { useEffect, useState } from "react";
import ShimmerUI from "../ShimmerUI/shimmer-ui";
import { Link } from "react-router-dom";

const BodyComp = () => {
  const [restoDataList, setRestoDataList] = useState([]);
  const [filteredArray, setFilteredArr] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ========== EXAMPLE useEffect 1: Mount/Unmount ==========
  useEffect(() => {
    console.log("✅ BodyComp mounted");
    return () => console.log("❌ BodyComp will unmount");
  }, []);

  // ========== EXAMPLE useEffect 2: Track searchText ==========
  useEffect(() => {
    console.log("🔍 searchText changed to:", searchText);
  }, [searchText]);

  // ========== EXAMPLE useEffect 3: Track restoDataList ==========
  useEffect(() => {
    console.log("📊 restoDataList changed, items count:", restoDataList.length);
  }, [restoDataList]);

  // ========== EXAMPLE useEffect 4: Track filteredArray ==========
  useEffect(() => {
    console.log("📋 filteredArray changed, items count:", filteredArray.length);
  }, [filteredArray]);

  // ========== EXAMPLE useEffect 5: Interval (cleanup example) ==========
  // useEffect(() => {
  //   console.log("⏱️ Interval started");
  //   const id = setInterval(() => {
  //     console.log("⏳ Interval tick at", new Date().toLocaleTimeString());
  //   }, 5000); // every 5 seconds

  //   return () => {
  //     clearInterval(id);
  //     console.log("🛑 Interval cleared on unmount");
  //   };
  // }, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchResto = async () => {
      setLoading(true);
      setError(null);
      try {
        const resp = await fetch("https://pastebin.com/raw/0QcdEDBL", { signal });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const resJson = await resp.json();

        // try a few likely locations for the restaurants array
        const tryPaths = [
          (obj) =>
            obj?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants,
          (obj) =>
            obj?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants,
          (obj) =>
            obj?.data?.cards?.find(
              (c) =>
                c?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        ];

        let restaurants;
        for (const getPath of tryPaths) {
          restaurants = getPath(resJson);
          if (Array.isArray(restaurants) && restaurants.length > 0) break;
        }

        restaurants = Array.isArray(restaurants) ? restaurants : [];

        setRestoDataList(restaurants);
        setFilteredArr(restaurants);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to fetch");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResto();

    return () => controller.abort();
  }, []);

  const handleSearch = () => {
    const q = (searchText || "").trim().toLowerCase();
    if (!q) {
      setFilteredArr(restoDataList);
      return;
    }
    const filteredList = (restoDataList || []).filter((elm) =>
      (elm?.info?.name || "").toLowerCase().includes(q)
    );
    setFilteredArr(filteredList);
  };

  if (loading) return <ShimmerUI />;
  if (error) return <div className="body">Error: {error}</div>;

  return (
    <div className="body">
      <div className="searchBar">
        <input
          type="text"
          className="searchBox"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(ev) => setSearchText(ev.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") handleSearch();
          }}
        />
        <button className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="restContainer">
        {filteredArray && filteredArray.length > 0 ? (
          filteredArray.map((restaurant) => (
            <Link style={{
              backgroundColor: "#f0f0f0", width: "23%", textDecoration: "none", color: "#000", border: "1px solid #0000",
              margin: "5px",
              padding: "5px"
            }} to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id ?? restaurant?.info?.name}> <RestoCardComp
                restaurantData={restaurant}
              /></Link>
          ))
        ) : (
          <div>No restaurants found.</div>
        )}
      </div>
    </div>
  );
};

export default BodyComp;
