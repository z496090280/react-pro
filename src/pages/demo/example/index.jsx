import Mouse from './components/Dialog/index'
import React, { useState } from 'React'
import { Button } from 'antd'

const Cat = (props) => {
  const { mouse } = props
  return (
    < div >
      <img src="https://i0.hdslb.com/bfs/face/b2531557304fd620d5b4ac70a95a32ad974ba8b5.jpg@96w_96h_1c.webp" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    </div >
  )
}

const RenderPropsE = () => {
  return (
    <div>
      <h1>props render 的应用</h1>
      <h2>移动鼠标!</h2>
      <Mouse render={mouse => (
        <Cat mouse={mouse}></Cat>
      )}></Mouse>
    </div>
  )
}

export default RenderPropsE
