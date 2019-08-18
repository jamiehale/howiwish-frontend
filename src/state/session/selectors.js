import * as R from 'ramda';

export const getSession = state => state.session.session;
export const isLoggedIn = state => R.not(R.isNil(getSession(state)));
export const isAdmin = isLoggedIn;
