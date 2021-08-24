import React from 'react'
import './collections-overview.styles.scss'

/** Redux */
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'

/** Components */
import CollectionPreview from '../collection-preview/collection-preview.component'

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(CollectionsOverview)
