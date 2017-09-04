/**
 * Created by wenbo.kuang on 2017/7/10.
 */
const _baseUrl = 'http://localhost:8080/blog/api';

export default {
  /* POST */
  saveMarkdownData (_this, params) {
    let url = _baseUrl + '/article/saveMarkdownData';
    let options = {
      headers: {
        'Authorization': 'asdasd',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    };
    return _this.$http.post(url, params, options)
  },

  /* GET */
  getAllCategory (_this) {
    let url = _baseUrl + '/category/getAllCategory';
    return _this.$http.get(url);
  }
}
