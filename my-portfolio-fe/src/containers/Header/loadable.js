/**
 * Asynchronously loads the component
 */

import React from "react";
import loadable from "../../utils/loadable";
import LoadingSpinner from "../../components/LoadingSpinner";

export default loadable(() => import('./index'), {
    fallback: <LoadingSpinner />,
});
