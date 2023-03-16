import produce from 'immer';

import {
  CHANGE_COLOR_VIEW,
  CHANGE_PAGE_VIEW,  //for reselect
  CURRENT_COLOR_VIEW,
  CURRENT_PAGE_VIEW,
  FETCH_CONTACT_FAILED,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT,
  FETCH_INFO_FAILED,
  FETCH_INFO_SUCCESS,
  FETCH_INFO,
  FETCH_PROJECTS_FAILED,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS,
  RESET_COLOR_VIEW,
  RESET_PAGE_VIEW,
} from './constants';
import { snakeToCamel } from '../helpers';

export const initialState = {
  colorViewDark: true,
  contact: {
    email: '',
    facebookUrl: '',
    githubProfileUrl: '',
    instagramUrl: '',
    linkedinUrl: '',
  },
  info: {
    about: '',
    info: '',
    resumeLink: '',
    skills: [],
  },
  pageView: 'Home',
  projects: [],
  requests: {
    error: {
      contact: '',
      info: '',
      projects: '',
    },
    status: {
      contact: 'idle',
      info: 'idle',
      projects: 'idle',
    }
  }
};

const mainReducer = produce((draft, { payload, type }) => {
  switch (type) {
    // color view for dark and light
    case CHANGE_COLOR_VIEW: {
      draft.colorViewDark = !initialState.colorViewDark;
      break;
    }
    case CURRENT_COLOR_VIEW: {
      draft.colorViewDark = initialState.colorViewDark;
      break;
    }
    case RESET_COLOR_VIEW: {
      draft.colorViewDark = initialState.colorViewDark;
      break;
    }
    // changing page view (home, projects, contact)
    case CHANGE_PAGE_VIEW: { //for reselect
      const { view } = payload;
      draft.pageView = view;
      break;
    }
    case CURRENT_PAGE_VIEW: {
      const { view } = payload;
      draft.pageView = view;
      break;
    }
    case RESET_PAGE_VIEW: {
      draft.pageView = initialState.pageView;
      break;
    }
    // projects
    case FETCH_PROJECTS: {
      draft.requests.status.projects = 'loading';
      break;
    }
    case FETCH_PROJECTS_FAILED: {
      const { errors } = payload;
      draft.requests.error.info = errors;
      draft.requests.status.projects = 'failed';
      break;
    }
    case FETCH_PROJECTS_SUCCESS: {
      const { projects } = payload;
      draft.projects = projects;
      draft.requests.status.projects = 'success';
      break;
    }
    // info
    case FETCH_INFO: {
      draft.requests.status.info = 'loading';
      break;
    }
    case FETCH_INFO_FAILED: {
      const { errors } = payload;
      draft.requests.error.info = errors;
      draft.requests.status.info = 'failed';
      break;
    }
    case FETCH_INFO_SUCCESS: {
      const { info } = payload;
      console.log(info)
      Object.entries(info).forEach(([key, value]) => {
        const camelKey = snakeToCamel(key);
        if (camelKey in draft.info) draft.info[camelKey] = value;
      })

      draft.requests.status.info = 'success';
      break;
    }
    // contact
    case FETCH_CONTACT: {
      draft.requests.status.info = 'loading';
      break;
    }
    case FETCH_CONTACT_FAILED: {
      const { errors } = payload;
      draft.requests.error.contact = errors;
      draft.requests.status.contact = 'failed';
      break;
    }
    case FETCH_CONTACT_SUCCESS: {
      const { contact } = payload;

      Object.entries(contact).forEach(([key, value]) => {
        const camelKey = snakeToCamel(key);
        if (camelKey in draft.contact) draft.contact[camelKey] = value;
      })

      draft.requests.status.contact = 'success';
      break;
    }
    default: {

    }
  };
}, initialState);

export default mainReducer;
