
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { MessageProps } from './message.interface'
import './message.scss'

const Message = (props: MessageProps) => {
  return (
    <View className='message-wrap'>
      Message
    </View>
  )
}

Message.config = {
  navigationBarTitleText: '标题'
}

export default Message
