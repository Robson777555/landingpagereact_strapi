import React from 'react';
import P from 'prop-types';
import { Title } from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Title
      as={as}
      $colorDark={colorDark} // Adicione $ para prop transient
      $size={size} // Adicione $ para prop transient
      $uppercase={uppercase} // Adicione $ para prop transient
    >
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
