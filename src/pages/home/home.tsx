import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { HomeProps } from './home.interface'
import './home.scss'
import { Loading } from '../../components/Loading'
import { AlertMessage } from '../../components/AlertMessage'
import { AtGrid, AtMessage } from "taro-ui"


const data = [
  {
    image: require('../../assets/get.png'),
    value: '捞瓶子'
  },
  {
    image: require('../../assets/out.png'),
    value: '扔瓶子'
  }
]

const Home = (props: HomeProps) => {
  const [isCatch, setCatch] = useState<boolean>(false);
  const [isThrow, setThrow] = useState<boolean>(false);
  const handleOnclick = ({ }, index) => {
    if (index === 0) {
      if (isThrow) setThrow(false);
      setCatch(true)
      let NetworkTimeout = setTimeout(() => {
        Taro.atMessage({
          'message': '网络超时',
          'type': 'warning',
        })
        setCatch(false)
        // 销毁定时器
        clearTimeout(NetworkTimeout)
      }, 25000);
    } else {
      setThrow(true)
    }
  }
  return (
    <View className='home-body'>
      <Loading
        status={isCatch}
        text='捕捞中'
      />
      <View className='home-buttom'>
        <AtGrid
          mode='rect'
          hasBorder={false}
          columnNum={2}
          data={data}
          onClick={handleOnclick}
        />
        <AtMessage />
      </View>
      {
        isThrow &&
        <AlertMessage
          setThrowFunc={setThrow}
        />
      }
    </View>
  )
}

export default Home;
