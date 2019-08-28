import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as myListSelectors from '../state/my-list/selectors';
import * as myListActions from '../state/my-list/actions';

const useMyItem = (itemId, reload = true) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (reload) {
      dispatch(myListActions.loadRequest(itemId));
    }
  }, [dispatch, reload]);

  const item = useSelector(state => myListSelectors.getMyListItem(state)(itemId));

  return {
    item,
  };
};

export default useMyItem;
