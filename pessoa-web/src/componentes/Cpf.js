import React from 'react'
import TextField from '@material-ui/core/TextField'
import NumberFormat from 'react-number-format'

function Cpf (props) {
  let propriedades = Object.assign({}, props)

  return (
    <NumberFormat  {...propriedades} margin='normal' customInput={TextField} format='###.###.###-##' />
  )
}

export default (Cpf)
