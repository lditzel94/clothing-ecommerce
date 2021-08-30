/** Base */
import React from 'react'

/** Styles */
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles'

/** Redux */
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'

/** Components */
import CollectionItem from '../../components/collection-item/collection-item.component'

function CollectionPage({ collection }) {
  const { title, items } = collection

  const renderCollectionItems = () =>
    items.map((item) => <CollectionItem key={item.id} item={item} />)

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {renderCollectionItems()}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
