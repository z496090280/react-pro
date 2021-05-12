import SortButton from './components/Dialog/index'
import React, { useState } from 'React'
import { Button } from 'antd'



const RenderPropsE = () => {
  const [sort, setSort] = useState(0)

  function handleSort (e) {
    console.log(e)
    setSort(e)
  }
  return (
    <div>
      <h1>sort组件</h1>
      <SortButton
        clickButton={handleSort}
        status={sort}
      >
        排序列
      </SortButton>
    </div>
  )
}

export default RenderPropsE
