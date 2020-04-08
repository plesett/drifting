
import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { MessageProps } from './message.interface'
import { AtTabs, AtTabsPane, AtList, AtListItem, AtBadge, AtSwipeAction } from 'taro-ui'
import './message.scss'
import { useSelector, useDispatch } from '@tarojs/redux'

const Message = (props: MessageProps) => {
  const tabList = [{ title: '消息' }, { title: '好友' }, { title: '通知' }]
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(0);
  const [IsLongPress, setIsLongPress] = useState<number | null>(null);
  const { message }: any = useSelector(state => state)
  const { isLongPress }: { isLongPress: { id: number; state: boolean } } = message;

  useEffect(() => {
    if (IsLongPress === null) return;
    console.log(1)
    let OffSwipeAction = setTimeout(() => {
      handleLongPress({})
      setIsLongPress(null)
    }, 3000);
    return () => {
      clearTimeout(OffSwipeAction)
    }
  }, [IsLongPress]);
  const handleOcClick = () => {
    Taro.navigateTo({
      url: '/pages/dialogue/dialogue'
    })
  }
  const handleLongPress = (e) => {
    console.log(e)
    setIsLongPress(0)
    var arr: { id: number; state: boolean } = isLongPress;
    arr[0].state = !isLongPress[0].state
    dispatch({
      type: 'message/GetUpdateIsLongPress',
      data: arr
    })
  }
  return (
    <View className='message-wrap'>
      <AtTabs animated={false} current={current} tabList={tabList} onClick={(e: number) => setCurrent(e)}>
        <AtTabsPane current={current} index={0} >
          <View>
            <AtList>
              <AtSwipeAction
                isOpened={isLongPress[0].state}
                disabled={isLongPress[0].state}
                // onClick={() => console.log('点击')}
                onOpened={() => console.log('确定')}
                onClosed={() => console.log('关闭')}
                options={[
                  {
                    text: '删除',
                    style: {
                      backgroundColor: '#FF4949'
                    }
                  }
                ]}
              >
                <View
                  onLongPress={(e) => handleLongPress(e)}
                >
                  <AtListItem
                    title='你是猪？？？'
                    note='描述信息'
                    onClick={handleOcClick}
                    // extraThumb='http://47.101.206.144:7001/public/default_yg.png'
                    thumb='http://47.101.206.144:7001/public/default_yg.png'
                  />
                </View>
              </AtSwipeAction>
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
