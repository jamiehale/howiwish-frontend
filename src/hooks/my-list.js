import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as myListSelectors from '../state/my-list/selectors';
import * as myListActions from '../state/my-list/actions';

const useMyList = (reload = true) => {
  const dispatch = useDispatch();

  const addItem = useCallback((item) => {
    dispatch(myListActions.addItemRequest(item));
  }, [dispatch]);

  const updateItem = useCallback((id, item) => {
    dispatch(myListActions.updateItemRequest(id, item));
  }, [dispatch]);

  useEffect(() => {
    if (reload) {
      dispatch(myListActions.loadRequest());
    }
  }, [dispatch, reload]);

  const myList = useSelector(myListSelectors.getMyList);

  return [
    myList,
    {
      addItem,
      updateItem,
    }
  ];
};

export default useMyList;
