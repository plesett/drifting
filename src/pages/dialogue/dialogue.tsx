
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { DialogueProps, DialogueState } from './dialogue.interface'
import './dialogue.scss'
import DialogueText from '../../components/DialogueText'
// import { } from '../../components'

// @connect(({ dialogue }) => ({
//     ...dialogue,
// }))

class Dialogue extends Component<DialogueProps,DialogueState > {
  config:Config = {
    navigationBarTitleText: '你是猪'
  }
  constructor(props: DialogueProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='dialogue-wrap'>
        <DialogueText
          text='这里是测试文字'
          image='https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg'
        />
        <DialogueText
          text='这里是测试文字这里是测试文字这里是测试文字这里是测试文字这里是测试文字这里是测试文字这里是测试文字'
          image='https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg'
        />
        <DialogueText
          isMe
          image='http://pic2.zhimg.com/50/v2-fb824dbb6578831f7b5d92accdae753a_hd.jpg'
          text='这里是测试文字'
        />
      </View>
    )
  }
}

export default Dialogue
