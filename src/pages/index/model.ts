// import Taro from '@tarojs/taro';
import * as indexApi from './service';

export default {
  namespace: 'index',
  state: {
    data: '暂未请求到数据',
    title: '暂未修改'
  },

  effects: {
    * getLists({ payload }, { select, call, put }) {
      // const { title } = yield select(state => state.index) // 获取state里面的值
      const res = yield call(indexApi.getLists)
        yield put({
          type: 'updateState',
          payload: {
            data: res.msg,
            title: payload.title
          }
        })
    }
  },

  reducers: {
    updateState(state, { payload: data }) {
      return { ...state, ...data }
    }
  }
}