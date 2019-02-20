import request from 'superagent'

export default apiUrl => {
  return request.get(apiUrl)
}
