import { useDispatch } from 'react-redux';
import { addNotice } from '../store/actions/add-notice.js';

/**
 * @memberof useNotice
 * @alias AddNotice
 */

/**
 * @classdesc
 * Hook which allows you to add notice message to the app.
 *
 * ```javascript
 * import { useNotice, Button } from 'adminjs'
 *
 * const myComponent = () => {
 *   const sendNotice = useNotice()
 *   return (
 *     <Button onClick={() => sendNotice({ message: 'I am awesome' })}>I am awesome</Button>
 *   )
 * }
 * ```
 *
 * @class
 * @subcategory Hooks
 * @bundle
 * @hideconstructor
 */
export const useNotice = () => {
  const dispatch = useDispatch();
  return notice => dispatch(addNotice(notice));
};
export default useNotice;