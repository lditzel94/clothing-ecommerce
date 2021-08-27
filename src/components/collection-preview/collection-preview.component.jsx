/** Base */
import React from 'react'
import './collection-preview.styles.scss'

/** Components */
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {
  const renderCollectionItems = () =>
    items
      .filter((_, index) => index < 4)
      .map((item) => <CollectionItem key={item.id} item={item} />)

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()} </h1>
      <div className="preview">{renderCollectionItems()}</div>
    </div>
  )
}

export default CollectionPreview
