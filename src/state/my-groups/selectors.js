// eslint-disable-next-line import/prefer-default-export
export const getMyGroupIds = state => state.myGroups.allIds;
export const getMyGroupsById = state => state.myGroups.byId;
export const getMyGroup = state => id => getMyGroupsById(state)[id];

export const getMyGroups = state => getMyGroupIds(state).map(getMyGroup(state));
