// eslint-disable-next-line import/prefer-default-export
export const getMyListItemIds = state => state.myList.allIds;
export const getMyListItems = state => state.myList.byId;
export const getMyListItem = state => id => getMyListItems(state)[id];

export const getMyList = state => getMyListItemIds(state).map(getMyListItem(state));
