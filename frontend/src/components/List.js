import React, {useState, useEffect} from 'react'
import Item from './Item'
import axiosWithAuth from '../utilis/axiosWithAuth';
import {connect} from 'react-redux';
import { getItem } from '../actions';


const ItemList = (props) => {

    const initialStateValues = [];
    const [itemList, setItemList] = useState(initialStateValues);

    useEffect(() => {
        axiosWithAuth()
          .get("/users") //need to get the endpoint
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
    
            {itemList.map((item, index) => {
              return <Item  details={item} key={index} />;
            })}
          </div>
        </div>
      );
}
const mapStateToProps = (state) =>{
  return({
    items:state.items
  })
}

export default connect(mapStateToProps)(ItemList);
