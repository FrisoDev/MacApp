import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from 'react-native-material-ui'

class Navigation extends PureComponent {
  render() {
    return (
      <Toolbar
      style=
      {{
        position: 'fixed',
        boxshadow: '0',
        left: '0',
        top: '0'
      }}
        />
    )
  }
}

export default Navigation
