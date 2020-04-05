
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { UserProps } from './user.interface'
import './user.scss'


const User = (props: UserProps) => {
  return (
    <View className='user-wrap'>
      User
    </View>
  )
}

User.config = {
  navigationBarTitleText: '标题'
}

export default User
