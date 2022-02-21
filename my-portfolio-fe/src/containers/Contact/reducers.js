/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */
import produce from 'immer';
import {
    GET_PROJECTS,
    GET_PROJECTS_SUCCESS,
    PATCH_PROJECTS,
    ADD_PROJECTS,
    DELETE_PROJECTS,
    REQUEST_PROJECTS_ERROR,
    REQUEST_PROJECTS_SUCCESS
} from "./constants";

// The initial state of the App
export const initialState = {
    loading: false,
    error: false,
    ProjectsInfo: [],
    message: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case GET_PROJECTS:
                draft.loading = true;
                draft.error = false;
                break;

            case GET_PROJECTS_SUCCESS:
                draft.ProjectsInfo = action.ProjectsInfo;
                draft.loading = false;
                break;

            case PATCH_PROJECTS:
                draft.loading = true;
                draft.error = false;
                break;

            case ADD_PROJECTS:
                draft.loading = true;
                draft.error = false;
                break;

            case DELETE_PROJECTS:
                draft.loading = true;
                draft.error = false;
                break;

            case REQUEST_PROJECTS_SUCCESS:
                draft.message = action;
                draft.loading = false;
                break;

            case REQUEST_PROJECTS_ERROR:
                draft.error = action.error;
                draft.loading = false;
                break;
        }
    });

export default appReducer;