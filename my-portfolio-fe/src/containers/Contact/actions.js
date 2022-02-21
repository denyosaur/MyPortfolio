/*
 * FormForStrings Actions
 */

import {
    GET_PROJECTS,
    PATCH_PROJECTS,
    ADD_PROJECTS,
    DELETE_PROJECTS,
    REQUEST_PROJECTS_ERROR,
    REQUEST_PROJECTS_SUCCESS
} from "./constants";

/**
 * Changes the input field of the form
 *
 * @param  {string} The new text from the input field
 * @return {object} An action object with a type of CHANGE_INPUT_TEXT and the inputText
 */
export function getProjects() {
    return {
        type: GET_PROJECTS,
    }
};

/**
 * Dispatched when the list of strings are loaded successfully by the saga request
 *
 * @param  {array} The list of strings
 * @return {object} An action object with a type of LOAD_LIST_SUCCESS and loadedList
 */
export function getProjectsSuccess(projectList) {
    return {
        type: GET_PROJECTS_SUCCESS,
        projectList,
    };
}

/**
 * This action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_LIST
 */
export function patchProject() {
    return {
        type: PATCH_PROJECTS,
    };
}

/**
 * Dispatched when the list of strings are loaded by the request saga
 *
 * @param  {status} Object Status object received from Saga
 * @return {object} An action object with a type of INPUT_TEXT_SUBMIT_SUCCESS and status
 */
export function addProject() {
    return {
        type: ADD_PROJECTS,
    };
}

/**
 * Dispatched when submitting inputText returns an error
 *
 * @param  {error} object Errors received from Saga
 * @return {object} An action object with a type of INPUT_TEXT_SUBMIT_ERROR and errors
 */
export function deleteProject() {
    return {
        type: DELETE_PROJECTS,
    };
}

/**
 * Dispatched when the list of strings are loaded successfully by the saga request
 *
 * @param  {array} The list of strings
 * @return {object} An action object with a type of LOAD_LIST_SUCCESS and loadedList
 */
export function requestProjectSuccess(message) {
    return {
        type: REQUEST_PROJECTS_SUCCESS,
        message,
    };
}

/**
 * Dispatched when loading the list returns an error
 *
 * @param  {object} The error
 * @return {object} An action object with a type of LOAD_LIST_ERROR passing the error
 */
export function requestProjectError(error) {
    return {
        type: REQUEST_PROJECTS_ERROR,
        error,
    };
}