import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        console.log(response.data);
        console.log(actionTypes.PURCHASE_BURGER_SUCCESS);

        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        console.log(actionTypes.PURCHASE_BURGER_FAIL);
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrderSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    orders: orders
  };
};

export const fetchOrderFail = error => {
  return {
    type: actionTypes.FETCH_ORDER_FAIL,
    error: error
  };
};

export const fetchOrderStart = () => {
  console.log("fetchorderstart");
  return {
    type: actionTypes.FETCH_ORDER_START
  };
};

export const fetchOrders = () => {
  console.log("fetchOrderInit");
  return dispatch => {
    console.log("Before fetchOrderStart");
    dispatch(fetchOrderStart());
    axios
      .get("/orders.json")
      .then(res => {
        // console.log(res);
        const fetchOrders = [];
        // eslint-disable-next-line no-unused-vars
        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key
          });
        }
        console.log("fetchorder---", fetchOrders);
        dispatch(fetchOrderSuccess(fetchOrders));
      })
      .catch(err => {
        dispatch(fetchOrderFail(err));
      });
  };
};
