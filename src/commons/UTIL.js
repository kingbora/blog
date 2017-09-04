/**
 * Created by wenbo.kuang on 2017/7/12.
 */
export default {
  isEmpty (v) {
    switch (typeof v) {
      case 'undefined':
        return true;
      case 'string':
        if (v.trim().length === 0 || v.trim() === '') {
          return true;
        }
        break;
      case 'boolean':
        if (!v) {
          return true;
        }
        break;
      case 'number':
        if (v === 0) {
          return true;
        }
        break;
      case 'object':
        if (v === null) {
          return true;
        } else if (v.length !== undefined && v.length === 0) {
          return true;
        } else {
          return false;
        }
    }
    return false;
  }
}
