import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchContact } from '../../redux/Main/actions';
import { selectContact, selectRequestStatus } from '../../redux/Main/selectors';

import ContactView from '../../components/ContactView';
import { ContactContainer } from './styledComponents';

const Contact = ({
  dispatchFetchContact,
  contact,
  contactRequestStatus,
}) => {
  useEffect(() => {
    dispatchFetchContact();
  }, [dispatchFetchContact]);

  return (
    <ContactContainer>
      <ContactView contact={contact} contactRequestStatus={contactRequestStatus} />
    </ContactContainer>
  )
}


Contact.propTypes = {
  dispatchFetchContact: T.func.isRequired,
  contact: T.object.isRequired,
  contactRequestStatus: T.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contact: selectContact(),
  contactRequestStatus: selectRequestStatus('contact'),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchContact: () => dispatch(fetchContact()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Contact);
