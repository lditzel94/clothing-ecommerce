/** Base */
import React from 'react'
import './collection.styles.scss'

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
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{renderCollectionItems()}</div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
