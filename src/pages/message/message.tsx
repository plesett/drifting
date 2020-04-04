
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { MessageProps, MessageState } from './message.interface'
import './message.scss'
// import { } from '../../components'

// @connect(({ message }) => ({
//     ...message,
// }))

class Message extends Component<MessageProps,MessageState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor(props: MessageProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='message-wrap'>
        Message
      </View>
    )
  }
}

export default Message
