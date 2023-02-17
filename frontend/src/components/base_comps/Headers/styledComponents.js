import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme: { fontSizes: { h1 } } }) => h1};
  font-weight: 300;
`;

export const H2 = styled.h2`
  font-size: ${({ theme: { fontSizes: { h2 } } }) => h2};
  font-weight: 300;
`;

export const H3 = styled.h3`
  font-size: ${({ theme: { fontSizes: { h3 } } }) => h3};
  font-weight: 300;
`;

export const H4 = styled.h4`
  font-size: ${({ theme: { fontSizes: { h4 } } }) => h4};
  font-weight: 300;
`;

export const H5 = styled.h5`
  font-size: ${({ theme: { fontSizes: { h5 } } }) => h5};
  font-weight: 300;
`;
