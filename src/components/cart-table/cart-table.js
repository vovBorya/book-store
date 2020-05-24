import React from "react";
import { connect } from 'react-redux'
import './cart-table.css'
import {
  bookDeletedFromCart,
  allBooksDeletedFromCart,
  bookAddedToCart
} from "../../actions";

const CartTable = ({ items, totalSum, onIncrease, onDecrease, onDelete}) => {

  const renderRow = (item, index) => {
    const { id, title, count, total } = item
    return (
      <tr key={id}>
        <th>{index + 1}</th>
        <th>{title}</th>
        <th>{count}</th>
        <th>${total}</th>
        <th>
          <div className="buttons">
            <button
              className="btn btn-outline-success"
              onClick={() => onIncrease(id)}
            >
              <i className="fa fa-plus-circle" />
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => onDecrease(id)}
            >
              <i className="fa fa-minus-circle" />
            </button>
            <button
              onClick={() => onDelete(id)}
              className="btn btn-outline-danger"
            >
              <i className="fa fa-trash-o" />
            </button>
          </div>
        </th>
      </tr>
    )
  }

  return (
    <div className="cart-table jumbotron">
      <h2 className="display-5">Your order</h2>
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>
      <div className="total">
        Total: ${totalSum}
      </div>
    </div>
  )
}

const mapStateToProps = ({ cartItems, orderTotal }) => ({
  items: cartItems,
  totalSum: orderTotal
})

const mapDispatchToProps = {
  onIncrease:bookAddedToCart,
  onDecrease:bookDeletedFromCart,
  onDelete: allBooksDeletedFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(CartTable)