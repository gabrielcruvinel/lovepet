import React from 'react';
import { Wrapper } from './styles';
import propTypes from 'prop-types';

// import { Container } from './styles';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>
}
AuthLayout.propTypes = {
    children: propTypes.element.isRequired,
};