/** Base */
import React from 'react'
import './directory.styles.scss'

/** Styles */
import { DirectoryMenuContainer } from './directory.styles'

/** Components */
import MenuItem from '../menu-item/menu-item.component'

/** Redux */
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

function Directory({ sections }) {
  const renderMenuItems = () =>
    sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))

  return <DirectoryMenuContainer>{renderMenuItems()}</DirectoryMenuContainer>
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
