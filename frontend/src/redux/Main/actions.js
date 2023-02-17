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

export function currentColorView() {
  return {
    type: CURRENT_COLOR_VIEW,
  };
}

export function changeColorView() {
  return {
    type: CHANGE_COLOR_VIEW,
  };
}

export function resetColorView() {
  return {
    type: RESET_COLOR_VIEW,
  };
}

export function currentPageView() {
  return {
    type: CURRENT_PAGE_VIEW,
  };
}

export function changePageView({ view }) {
  return {
    payload: { view },
    type: CHANGE_PAGE_VIEW,
  };
}

export function resetPageView() {
  return {
    type: RESET_PAGE_VIEW,
  };
}

export function fetchProjects() {
  return {
    type: FETCH_PROJECTS,
  };
}

export function fetchProjectsFailed(error) {
  return {
    payload: { error },
    type: FETCH_PROJECTS_FAILED,
  };
}

export function fetchProjectsSuccess(projects) {
  return {
    payload: { projects },
    type: FETCH_PROJECTS_SUCCESS,
  };
}

export function fetchInfo() {
  return {
    type: FETCH_INFO,
  };
}

export function fetchInfoFailed(error) {
  return {
    payload: { error },
    type: FETCH_INFO_FAILED,
  };
}

export function fetchInfoSuccess(info) {
  return {
    payload: { info },
    type: FETCH_INFO_SUCCESS,
  };
}

export function fetchContact() {
  return {
    type: FETCH_CONTACT,
  };
}

export function fetchContactFailed(error) {
  return {
    payload: { error },
    type: FETCH_CONTACT_FAILED,
  };
}

export function fetchContactSuccess(contact) {
  return {
    payload: { contact },
    type: FETCH_CONTACT_SUCCESS,
  };
}
