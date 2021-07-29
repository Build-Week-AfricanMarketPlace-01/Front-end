import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilis/axiosWithAuth";
import Item from "./Item";
const initialStateValues = [];

export default function ItemList() {
  const [itemList, setItemList] = useState(initialStateValues);

  useEffect(() => {
    axiosWithAuth()
      .get("https://?????") //need to get the endpoint
      .then((res) => {
        setItemList(res.data);
        console.table(res.data, "items list");
      })
      .catch((err) => {
        console.log(err, "error fetching items");
      });
  }, []);

  return (
    <div>
      <h1 className="header">Items</h1>
      <div className="items">
        {itemList.map((item) => {
          return <Item details={item} key={item.class_id} />;
        })}
      </div>
    </div>
  );
}
