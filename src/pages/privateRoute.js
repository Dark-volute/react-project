import { Redirect } from 'umi'


export default (props) => {
  // 判断是否登录， 即是否有token
  const isLogin = !!localStorage.getItem('token')
  if (!isLogin) {
    // 删除跳转登录之前的页面
    window.sessionStorage.removeItem('from_router')
    return (<div className="auth-router">{ props.children }	</div>)
  } else {
    // 保存跳转登录之前的页面
    const hash = window.location.hash
    const fromRouter = hash ? hash.slice(1) : ''
    window.sessionStorage.setItem('from_router', fromRouter)
    // 跳转登录页面
    return (<Redirect to="/login" />)
  }
}
