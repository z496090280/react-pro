import Dialog from './components/Dialog/index'
import React, { useState } from 'React'
import { Button } from 'antd'

const UseDialog = () => {
  const [isShowDialog, setIsShowDialog] = useState(true);

  const toggleDialog = () => {
    setIsShowDialog(prev => !prev);
  }

  const closeDialog = () => {
    setIsShowDialog(false)
  }

  const onSure = () => {
    console.log('确定。。。')
    setTimeout(() => {
      setIsShowDialog(false)
    }, 2000)
    setIsShowDialog(pre => !pre.isShowDialog)
  }
  return (
    <div>
      <Button onClick={toggleDialog}>使用弹窗类组件</Button>
      {
        isShowDialog
        && <Dialog
          title="这是标题"
          dialogWidth="300"
          onCancel={closeDialog}
          onOk={onSure}
          cancelText="残忍离开"
          sureText="我再想想"
        >
          <div className='dialog-content'>具体内容请写在这里...</div>
        </Dialog>
      }
    </div>
  )
}

export default UseDialog
