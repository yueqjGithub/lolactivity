const host = 'http://app.07hygame.com:8585/'

module.exports = {
  sendSmg: host + 'sendSmg',
  checkCode: host + 'checkCode',
  register: host + 'register',
  login: host + 'login',
  checkTeamName: host + 'testingTeamName',
  saveTeamData: host + 'saveTeamData',
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
