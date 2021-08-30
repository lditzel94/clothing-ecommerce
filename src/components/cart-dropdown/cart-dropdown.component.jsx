/** Base */
import React from 'react'

/** Styles */
import {
  CartDropdownContainer,
  CartItemContainer,
  CartDropdownButton,
  EmptyMessage,
} from './cart-dropdown.styles'

/** Router */
import { withRouter } from 'react-router-dom'

/** Redux */
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

/** Components */
import CartItem from '../cart-item/cart-item.component'

function CartDropdown({ cartItems, history, dispatch }) {
  const renderCartItems = () =>
    cartItems.length ? (
      cartItems.map((item) => <CartItem item={item} />)
    ) : (
      <EmptyMessage>Your cart is empty</EmptyMessage>
    )

  return (
    <CartDropdownContainer>
      <CartItemContainer>{renderCartItems()}</CartItemContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
