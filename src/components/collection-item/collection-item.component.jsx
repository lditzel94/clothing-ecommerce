/** Base */
import React from 'react'

/** Styles */
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles'

/** Redux */
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
