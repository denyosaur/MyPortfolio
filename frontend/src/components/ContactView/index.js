import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import ContactLink from '../ContactLink';
import { ContactViewContainer } from './styledComponents';

import { contactDictionary } from './constants';

const ContactView = ({ contact, contactRequestStatus }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const contactKeys = Object.keys(contact);

    if (contactRequestStatus === 'success') {
      const linkComponents = contactKeys.map((key) => {
        const { Icon, label } = contactDictionary[key];
        const pathnameToUse = key !== 'email' ? contact[key] : `mailto:${contact[key]}`;
        const labelToUse = key !== 'email' ? label : contact[key];

        return (
          <ContactLink
            key={key}
            Icon={Icon}
            label={labelToUse}
            pathname={pathnameToUse}
          />)
      });
      setLinks(linkComponents);
    };

  }, [
    contact,
    contactRequestStatus,
    setLinks,
  ]);

  return (
    <ContactViewContainer>
      {links}
    </ContactViewContainer>
  )
};

ContactView.propTypes = {
  contact: T.object,
  contactRequestStatus: T.string.isRequired,
};

export default ContactView;
