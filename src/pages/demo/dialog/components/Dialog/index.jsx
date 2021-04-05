import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, Space, Card } from 'antd';
import './index.less'

const Dialog = (props) => {
  const node = document.createElement('div')
  document.body.appendChild(node)
  useEffect(() => {
    return () => {
      document.body.removeChild(node)
    }
  }, [])

  return createPortal(
    <div className="com-dialog" style={{ width: props.dialogWidth }}>
      <div className="mask">
        <Space direction="vertical" className="com-dialog-inner">
          <Card title={props.title}>
            <div className="content">{props.children}</div>
          </Card>
          <Card title="">
            <Button type="default" onClick={props.onCancel}>{props.cancelText || '取消'}</Button>
            <Button type="primary" onClick={props.onOk}>{props.sureText || '确定'}</Button>
          </Card>
        </Space>
      </div>
    </div>,
    node
  )

}

export default Dialog