import React, {useState, useEffect} from "react";
import axios from "axios";
import SelectTitle from "./SelectTitle";

export default function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState(9);
  const [categoryList, setCategoryList] = useState([]);

  async function getCategoryList() {
    const response = await axios.get("https://opentdb.com/api_category.php");
    setCategoryList(response?.data?.trivia_categories);
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  if (categoryList.length === 0) return <div>Loading....</div>;

  return (
    <div>
      <SelectTitle icineYazilacakSey={"Select Category: "} />

      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <select
          style={{
            color: "white",
            backgroundColor: "DodgerBlue",
            borderRadius: 100 / 2,
            overflow: "hidden",
            borderWidth: 6,
            borderColor: "black",
            fontSize: 20,
            width: 200,
            height: 30,
            textAlign: "center",
            height: 50,
            width: 411,
          }}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          name="selection"
          id="selection">
          {categoryList.map((categoryItem) => (
            <option key={categoryItem.id} value={categoryItem.id}>
              {categoryItem.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
