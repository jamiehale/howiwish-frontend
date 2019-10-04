import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as myGroupsSelectors from '../state/my-groups/selectors';
import * as myGroupsActions from '../state/my-groups/actions';

const useMyGroup = (groupId, reload = true) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (reload) {
      dispatch(myGroupsActions.loadRequest(groupId));
    }
  }, [dispatch, reload, groupId]);

  const group = useSelector(state => myGroupsSelectors.getMyGroup(state)(groupId));

  return {
    group,
  };
};

export default useMyGroup;
