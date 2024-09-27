import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
`;

export const Link = styled.a`
  color: #1976d2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;

export const Caption = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

export const ErrorText = styled.span`
  font-size: 0.9rem;
  color: #ff0000;
`;