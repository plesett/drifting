// import Taro from '@tarojs/taro';
import * as indexApi from './service';

export default {
  namespace: 'index',
  state: {
    Authorization: true,
    UserInfo: {}
  },

  effects: {
    * UpdateisUserInfo({ data }, { select, call, put }) {
      // const { title } = yield select(state => state.index) // 获取state里面的值
      // const res = yield call(indexApi.getLists)
        yield put({
          type: 'UpdateUserInfoState',
          data: data
        })
    },
    * UpdateAuthorization({ Authorization }, { select, call, put }) {
      yield put({
        type: 'UpdateAuthorizationState',
        Authorization: Authorization
      })
    }
  },

  reducers: {
    UpdateUserInfoState(state, { data: data }) {
      return { ...state, UserInfo: data, Authorization: false }
    },
    UpdateAuthorizationState(state, { Authorization }) {
      return { ...state, Authorization: Authorization }
    }
  }
}