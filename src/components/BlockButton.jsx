import React from 'react'
import { useSlate } from 'slate-react';
import Button from './common/Button';
import Icon from './common/Icon';
import { isBlockActive, toggleBlock } from './utils';

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active = { isBlockActive(editor, format)}
      onMouseDown = {(e) => {
        e.preventDefault();
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default BlockButton
