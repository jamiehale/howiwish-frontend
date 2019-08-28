import * as R from 'ramda';

export const getSession = state => state.session.session;
export const isSignedIn = state => R.not(R.isNil(getSession(state)));
