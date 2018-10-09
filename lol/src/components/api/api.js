const host = 'http://app.07hygame.com:8585/'

module.exports = {
  sendSmg: host + 'sendSmg', // 获取验证码
  checkCode: host + 'checkCode', // 校验验证码
  register: host + 'register', // 注册
  login: host + 'login', // 登录
  checkTeamName: host + 'testingTeamName', // 检查队伍名重复
  saveTeamData: host + 'saveTeamData', // 上传队伍信息
  personnelAuth: host + 'personnelAuth', // 员工认证
  turnCode: function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  },
  decodeUnicode: function (data) {
    let str = data.replace(/\\/g, '%')
    return unescape(str)
  }
}
