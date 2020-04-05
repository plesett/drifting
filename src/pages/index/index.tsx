import Taro, { useState, useCallback, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { IndexProps, IndexState } from './index.interface'
import './index.scss'
import Home from '../home/home'
import Message from '../message/message'
import User from '../user/user'
import { useSelector, useDispatch } from '@tarojs/redux'

const Index = (props: IndexProps) => {
  const [current, setCurrent] = useState(0);
  const [loading, setloading] = useState(false);
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'index/getLists', title: 'aaaaaa' })
  }, [loading]);
  const d = useSelector(state => state) // 获取redux数据
  console.log(d)
  return (
    <View>
      {
        current === 0 && <Home />
      }
      {
        current === 1 && <Message />
      }
      {
        current === 2 && <User />
      }
      <AtTabBar
        fixed
        tabList={[
          { title: '主页', iconType: 'bullet-list' },
          { title: '消息', iconType: 'message', text: 'new' },
          { title: '用户', iconType: 'user', text: '100' }
        ]}
        onClick={(value) => setCurrent(value)}
        current={current}
      />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '积木'
}

export default Index;