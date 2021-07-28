import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Item from './Item'
import axiosWithAuth from '../utils/axiosWithAuth';

const initialStateValues = '';

export default function ItemList() {
    const [itemList, setItemList] = useState(initialStateValues);

    useEffect(() => {
        axiosWithAuth()
          .get("https://build-week-africanmarketplace1.herokuapp.com/api") //need to get the right endpoint
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