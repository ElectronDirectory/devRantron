export const AUTH = {
  LOGIN: 'AUTH_LOGIN',
  NOLOGIN: 'AUTH_NOLOGIN',
  LOGOUT: 'AUTH_LOGOUT',
};
export const STATE = {
  INITIAL: 'STATE_INITIAL',
  SUCCESS: 'STATE_SUCCESS',
  FAILED: 'STATE_FAILED',
  LOADING: 'STATE_LOADING',
};
export const TOAST = {
  SHOW: 'TOAST_SHOW',
  HIDE: 'TOAST_HIDE',
};

export const USER = {
  FETCH: 'USER_FETCH',
  REMOVE: 'USER_REMOVE',
};

export const ITEM = {
  RANT: {
    NAME: 'RANT',
    ACTION: {
      FETCH: 'RANT_FETCH',
      VOTE: 'RANT_VOTE',
    },
  },
  COMMENT: {
    NAME: 'COMMENT',
    ACTION: {
      VOTE: 'RANT_VOTE',
    },
  },
  COMMON: {
    ACTION: {
      CLOSE: 'ITEM_CLOSE',
    },
  },
};

export const FEED = {
  RANTS: {
    ACTION: {
      FETCH: 'RANTS_FETCH',
      RESET: 'RANTS_RESET',
    },
    NAME: 'RANTS',
    FILTERS: {
      PRIMARY: {
        ALGO: 'algo',
        TOP: 'top',
        RECENT: 'recent',
      },
    },
  },
  WEEKLY: {
    ACTION: {
      FETCH: 'WEEKLY_FETCH',
    },
    NAME: 'WEEKLY',
    FILTERS: {
      PRIMARY: {
        ALGO: 'algo',
        TOP: 'top',
        RECENT: 'recent',
      },
      SECONDARY: [
        {
          DAY: 'WEEKLY_DAY',
        },
      ],
    },
  },
};