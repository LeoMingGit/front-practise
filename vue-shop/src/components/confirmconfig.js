import Confrim from './confirm.vue'

const MyConfrim = {}

MyConfrim.install = (app) => {
  const AlertConstructor ={extend:Confrim}
  const instance = new AlertConstructor()
  instance.$mount(document.createElement('div'))

  app.config.globalProperties.$confirm = (content,cancelText,confrimText,showCancel, confirm, cancel) => {
    document.body.appendChild(instance.$el)
    instance.content = content
    instance.cancelText = cancelText
    instance.confrimText = confrimText
    instance.showCancel = showCancel
    instance.instance = instance
    if (typeof confirm !== 'undefined') {
      instance.confirm = confirm
    }
    if (typeof cancel !== 'undefined') {
      instance.cancel = cancel
    }
  }
}
export default MyConfrim;