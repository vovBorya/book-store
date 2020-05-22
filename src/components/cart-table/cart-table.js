import React from "react";
import './cart-table.css'

const CartTable = ({items}) => (
  <div className="cart-table jumbotron">
    <h2 className="display-5">Your order</h2>
    <table className="table">
      <thead>
        <th>#</th>
        <th>Item</th>
        <th>Count</th>
        <th>Price</th>
        <th>Action</th>
      </thead>

      <tbody>
      <th>1</th>
      <th>site</th>
      <th>2</th>
      <th>$40</th>
      <th>
        <button className="btn btn-outline-success">
          <i className="fa fa-plus-circle" />
        </button>
        <button className="btn btn-outline-danger">
          <i className="fa fa-trash-o" />
        </button>
        <button className="btn btn-outline-warning">
          <i className="fa fa-minus-circle" />
        </button>
      </th>
      </tbody>
    </table>
    <div className="total">
      Total: $201
    </div>
  </div>
)


export default CartTable