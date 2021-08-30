/** Base */
import React from 'react'

/** Styles */
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles'

/** Router */
import { withRouter } from 'react-router-dom'

/** Components */
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  const renderCollectionItems = () =>
    items
      .filter((_, index) => index < 4)
      .map((item) => <CollectionItem key={item.id} item={item} />)

  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>{renderCollectionItems()}</PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview)
