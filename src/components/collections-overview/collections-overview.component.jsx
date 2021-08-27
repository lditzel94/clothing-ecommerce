import React from 'react'
import './collections-overview.styles.scss'

/** Redux */
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

/** Components */
import CollectionPreview from '../collection-preview/collection-preview.component'

function CollectionsOverview({ collections }) {
  const renderCollectionPreview = () =>
    collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))

  return <div className="collections-overview">{renderCollectionPreview()}</div>
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
