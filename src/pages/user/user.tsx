
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { UserProps, UserState } from './user.interface'
import './user.scss'
// import { } from '../../components'

// @connect(({ user }) => ({
//     ...user,
// }))

class User extends Component<UserProps,UserState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor(props: UserProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='user-wrap'>
        User
      </View>
    )
  }
}

export default User
