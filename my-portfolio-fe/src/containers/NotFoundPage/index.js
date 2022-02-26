/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from "react";

import Section from "../../components/Section";
import H2 from "../../components/Htags/H2";


function NotFound() {
  return (
    <Section id="not_found">
      <H2>
        NotFound
      </H2>
    </Section>
  );
}

export default NotFound;