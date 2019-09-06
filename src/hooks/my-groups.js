import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as myGroupsSelectors from '../state/my-groups/selectors';
import * as myGroupsActions from '../state/my-groups/actions';

const useMyGroups = (reload = true) => {
  const dispatch = useDispatch();

  const createGroup = useCallback((name, description) => {
    dispatch(myGroupsActions.createGroupRequest(name, description));
  }, [dispatch]);

  const updateGroup = useCallback((id, group) => {
    dispatch(myGroupsActions.updateGroupRequest(id, group));
  }, [dispatch]);

  useEffect(() => {
    if (reload) {
      dispatch(myGroupsActions.loadAllRequest());
    }
  }, [dispatch, reload]);

  const myGroups = useSelector(myGroupsSelectors.getMyGroups);

  return [
    myGroups,
    {
      createGroup,
      updateGroup,
    }
  ];
};

export default useMyGroups;
