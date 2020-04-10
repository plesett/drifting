import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { IndexProps, IndexState } from './index.interface'
import './index.scss'
import Home from '../home/home'
import Message from '../message/message'
import User from '../user/user'
import { useSelector, useDispatch } from '@tarojs/redux'
import { AlertAuthorization } from '../../components/AlertAuthorization'

const Index = (props: IndexProps) => {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch()
  const index = useSelector<{index}, { index }>(state => state) // 获取redux数据
  const { Authorization } = index.index;
  useEffect(() => {
    Taro.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已授权
          console.log('已授权')
          dispatch({
            type: 'index/UpdateAuthorization',
            Authorization: false
          })
        } else {
          // 未授权
          console.log('未授权')
          dispatch({
            type: 'index/UpdateAuthorization',
            Authorization: true
          })
        }
      }
    })
    Taro.getStorage({
      key: 'UserInfo',
      success: (res) => {
        if (res.data.cloudID) {
          // 本地有用户信息
          dispatch({
            type: 'index/UpdateisUserInfo',
            data: res.data
          })
        } else {
          // 本地没用户数据
          console.log('本地没用户数据')
          dispatch({
            type: 'index/UpdateAuthorization',
            Authorization: true
          })
        }
      }
    })
  }, [current]);
  const UserInfo = (res) => {
    Taro.setStorage({
      key: "UserInfo",
      data: res.detail
    })
    dispatch({
      type: 'index/UpdateAuthorization',
      Authorization: false
    })
  }
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
      {
        Authorization &&
        <AlertAuthorization
          title='授权'
          onGetUserInfo={UserInfo}
          Image='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
        />
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