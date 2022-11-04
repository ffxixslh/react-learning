import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import './Transition.css'

const { Meta } = Card

function ReactTransition () {
  const [show, setShow] = React.useState(false)
  return (
    <>
      <button onClick={() => setShow(!show)}>show/hide</button>
      <CSSTransition in={show} timeout={300} classNames={'card'} unmountOnExit appear>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </CSSTransition>
    </>
  )
}

export default ReactTransition
