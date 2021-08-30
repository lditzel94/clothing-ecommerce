import React from 'react'

/** Styles */
import { CollectionsOverviewContainer } from './collections-overview.styles'

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

  return (
    <CollectionsOverviewContainer>
      {renderCollectionPreview()}
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
