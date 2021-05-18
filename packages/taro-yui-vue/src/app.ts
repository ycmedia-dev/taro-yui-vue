import { createApp } from 'vue'
import './app.scss'
import { uploadKey } from './components/upload/token'

const app = createApp({
  onShow() { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
app.provide(uploadKey,{
  getSignatureUrl: "https://yy.bcadx.com/upload/get_signature",
  bucket: 'yyres-bcadx-com',
  operator: 'lmm2019',
  domain:'yyres.bcadx.com'
})
export default app
