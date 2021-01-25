export interface State {
    user:  {
      name: string,
      role: number[]
    }
}

export interface GlobalState {
  global: State
}

export  default {
  namespace:  'global',
  state: {
    user:  {
      name: 'shel',
      role: [1]
    },
  },
  reducers: {
    // 改变首页显示模式
    increase(state: State, { payload: data}: any) {
      state.user.name = data
    }
  }
}
