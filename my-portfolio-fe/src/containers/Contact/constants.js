/*
 * myportfolio
 *
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 */

const GET_PROJECTS = 'myportfolio/contacts/GET_PROJECTS';
const GET_PROJECTS_SUCCESS = 'myportfolio/contacts/GET_PROJECTS_SUCCESS';
const PATCH_PROJECTS = 'myportfolio/contacts/PATCH_PROJECTS';
const ADD_PROJECTS = 'myportfolio/contacts/ADD_PROJECTS';
const DELETE_PROJECTS = 'myportfolio/contacts/DELETE_PROJECTS';

const REQUEST_PROJECTS_SUCCESS = 'myportfolio/contacts/REQUEST_PROJECTS_SUCCESS';
const REQUEST_PROJECTS_ERROR = 'myportfolio/contacts/REQUEST_PROJECTS_ERROR';

export {
    GET_PROJECTS,
    GET_PROJECTS_SUCCESS,
    PATCH_PROJECTS,
    ADD_PROJECTS,
    DELETE_PROJECTS,
    REQUEST_PROJECTS_ERROR,
    REQUEST_PROJECTS_SUCCESS
};