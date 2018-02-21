import { createHashHistory } from 'history';
const hashHistory = process.env.NODE_ENV === 'test' ? {} : createHashHistory();
export default hashHistory;
