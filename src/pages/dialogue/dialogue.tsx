
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { DialogueProps, DialogueState } from './dialogue.interface'
import './dialogue.scss'
// import { } from '../../components'

// @connect(({ dialogue }) => ({
//     ...dialogue,
// }))

class Dialogue extends Component<DialogueProps,DialogueState > {
  config:Config = {
    navigationBarTitleText: '标题'
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
          
      </View>
    )
  }
}

export default Dialogue
