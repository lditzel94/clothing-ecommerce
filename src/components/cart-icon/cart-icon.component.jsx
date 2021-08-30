/** Base */
import React from 'react'

/** Styles */
import { CartIconContainer, ShopIcon, ItemCount } from './cart-icon.styles'

/** Redux */
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShopIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
