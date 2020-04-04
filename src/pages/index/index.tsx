import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { IndexProps, IndexState } from './index.interface'
import './index.scss'
// import {  } from '../../components'

@connect(({ index }) => ({
  ...index,
}))
class Index extends Component<IndexProps, IndexState> {
  config: Config = {
    navigationBarTitleText: 'Taro + dva demo'
  }
  constructor(props: IndexProps) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // 加载完成执行一个 action 异步
    const { dispatch } = this.props;
    dispatch({
      type: 'index/getLists',
      payload: {
        title: '加载完成咯'
      }
    })
  }

  render() {
    const { data, title } = this.props;
    return (
      <View className='fx-index-wrap'>
        <View className='index-list'>
          你好
        </View>
        <View>{data}</View>
        <View>
          {title}
        </View>
      </View>
    )
  }
}

export default Index