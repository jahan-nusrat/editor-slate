import React from 'react'
import { useSlate } from 'slate-react'
import Button from './common/Button'
import Icon from './common/Icon'
import { isMarkActive, toggleMark } from './utils'

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button 
      active = { isMarkActive(editor, format)}
      onMouseDown = {(e) => {
        e.preventDefault();
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default MarkButton
