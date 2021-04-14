import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button, Space, Card } from 'antd';
import './index.less'

const Mouse = (props) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  function handleMouseMove (e) {
    setX(e.clientX)
    setY(e.clientY)
  }
  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <p>x:{x},y:{y}</p>
      {props.render({ x, y })}
    </div>
  )
}

export default Mouse