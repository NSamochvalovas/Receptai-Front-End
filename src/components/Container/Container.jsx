import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Container.styles'

function Container({children}) {
  return (
    <S.Container>{children}</S.Container>
  )
}

Container.propTypes = {
  chilren:PropTypes.node.isRequired
}

export default Container
