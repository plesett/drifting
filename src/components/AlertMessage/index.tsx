import Taro, { useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTextarea, AtButton } from 'taro-ui'
import './index.scss'

export const AlertMessage = (props: { setThrowFunc: (e:boolean) => void}) => {
  const [value, setvalue] = useState<string>('');
  const { setThrowFunc } = props;
  return (
    <View className='AlertMessage-box'>
      <AtTextarea
        value={value}
        onChange={(e: any) => setvalue(e)}
        maxLength={200}
        placeholder='请输入瓶子内容...'
      />
      <View className='at-row'>
        <View className='at-col at-col-6'>
          <AtButton
            type='secondary'
            size='small'
          >确定</AtButton>
        </View>
        <View className='at-col at-col-6'>
          <AtButton
            type='secondary'
            size='small'
            onClick={() => setThrowFunc(false)}
          >取消</AtButton>
        </View>
      </View>
    </View>
  )
}