import React, { useState, useCallback, FC, memo } from 'react';
import { connect } from 'dva';
import Memo from './memo'
import useSWR from 'swr'
import { UmiComponentProps } from '@/types/global'
import { GlobalState } from '@/models/global';

const fetcher = (url: string) => fetch(url).then(r => r.json())

type PageStateProps = ReturnType<typeof mapStateToProps>;

type PageProps = PageStateProps & UmiComponentProps;

function mapStateToProps(state: GlobalState) {
  return { user : state.global.user }
}

const Index: FC<PageProps> = function (props) {
  const { dispatch, user } = props
  const [count, setCount] = useState(0)

  function add (num:any) {
    dispatch({ type: 'global/increase', payload: num })
    setCount(count + 1)
  }

  const { data } = useSWR('/api/users', fetcher)

  function testCallback () {}

  const callback = useCallback(testCallback, [])

  return (
    <div>
      <button onClick={() => add('shel2')}>button</button>
      <Memo data={user} fn={callback}/>
    </div>
  );
}

export default connect(mapStateToProps)(memo(Index))

