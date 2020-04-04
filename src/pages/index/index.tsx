import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTabBar } from 'taro-ui'
import { IndexProps, IndexState } from './index.interface'
import './index.scss'
import Home from '../home/home'
import Message from '../message/message'
import User from '../user/user'

@connect(({ index }) => ({
  ...index,
}))
class Index extends Component<IndexProps, IndexState> {

  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  config: Config = {
    navigationBarTitleText: '积木'
  }

  componentDidMount() {}

  render() {
    const { current } = this.state;
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
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index