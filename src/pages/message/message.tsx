
import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { MessageProps } from './message.interface'
import { AtTabs, AtTabsPane, AtList, AtListItem, AtBadge } from 'taro-ui'
import './message.scss'

const Message = (props: MessageProps) => {
  const [current, setCurrent] = useState(0);
  const tabList = [{ title: '消息' }, { title: '好友' }, { title: '通知' }]
  const handleOcClick = () => {
    // 跳转到目的页面，在当前页面打开
    Taro.redirectTo({
      url: 'pages/dialogue/dialogue'
    })
  }
  return (
    <View className='message-wrap'>
      <AtTabs current={current} tabList={tabList} onClick={(e:number) => setCurrent(e)}>
        <AtTabsPane current={current} index={0} >
          <View>
            <AtList>
              <AtListItem
                title='你是猪？？？'
                note='描述信息'
                onClick={handleOcClick}
                // extraThumb='http://47.101.206.144:7001/public/default_yg.png'
                thumb='http://47.101.206.144:7001/public/default_yg.png'
              />
              <AtListItem
                title='派大星'
                note='描述信息'
                thumb='http://47.101.206.144:7001/public/default_yg.png'
              />
              <AtListItem
                title='是哇'
                note='描述信息'
                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
              />
            </AtList>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View>
            <AtList>
              <AtListItem
                title='你是猪？？？'
                arrow='right'
                thumb='http://47.101.206.144:7001/public/default_yg.png'
              />
              <AtListItem
                title='派大星'
                arrow='right'
                thumb='http://47.101.206.144:7001/public/default_yg.png'
              />
              <AtListItem
                title='是哇'
                arrow='right'
                thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
              />
            </AtList>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View>
            <AtList>
              <AtListItem
                title='系统通知'
                note='系统通知系统通知系统通知'
                thumb='http://47.101.206.144:7001/public/default_yg.png'
              />
            </AtList>
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}

Message.config = {
  navigationBarTitleText: '消息'
}

export default Message
