import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { UserProps } from './user.interface'
import { AtAvatar, AtList, AtListItem } from 'taro-ui'
import './user.scss'


const User = (props: UserProps) => {
  const { user = {} } = props;
  return (
    <View className='user-wrap'>
      <View className='at-row user-Info'>
        <View className='at-col at-col-2'>
          <AtAvatar
            image={Object.keys(user).length > 0 ? 'http://pic2.zhimg.com/50/v2-fb824dbb6578831f7b5d92accdae753a_hd.jpg' : 'http://47.101.206.144:7001/public/default_yg.png'}
            circle
            size='large'
          />
        </View>
        <View className='at-col at-col-10'>
          {
            Object.keys(user).length > 0 ?
              <View className='user-name'>酸梨<View className='user-mobile'>182****1057</View></View>
              :
              <View className='user-name'>未登录<View className='user-mobile'>点击登录</View></View>
          }
        </View>
      </View>
      <View>

        <View className='at-row at-row__justify--between user-Menu-list'>
          <Image
            className='user-Menu-Img'
            src={require('../../assets/gerenziliao.png')}
          />
          <View className='at-col at-col-11'>编辑资料</View>
        </View>

        <View className='at-row at-row__justify--between user-Menu-list'>
          <Image
            className='user-Menu-Img'
            src={require('../../assets/chongzhi.png')}
          />
          <View className='at-col at-col-11'>充值管理</View>
        </View>

        <View className='at-row at-row__justify--between user-Menu-list'>
          <Image
            className='user-Menu-Img'
            src={require('../../assets/fenxaing.png')}
          />
          <View className='at-col at-col-11'>分享</View>
        </View>

      </View>
    </View>
  )
}

User.config = {
  navigationBarTitleText: '标题'
}

export default User
