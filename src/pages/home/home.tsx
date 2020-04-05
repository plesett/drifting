
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { HomeProps } from './home.interface'
import './home.scss'

const Home = (props:HomeProps) => {
  return (
    <View className='home-body'>
      {/* <View className='home-h'></View> */}
    </View>
  )
}

Home.config = {
  navigationBarTitleText: '标题'
}

export default Home
