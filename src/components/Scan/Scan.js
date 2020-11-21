import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types';

const Scan = (props) => {
  console.log(props)
  return (
    <>
      <h1>This Is Scan Component</h1>
    </>
  )
}

export default Scan

export const query = graphql`
{
  allContentfulScanData {
    nodes {
      id
      title {
        id
        title
      }
    }
  }
}
`;

Scan.propTypes = {
  id: PropTypes.objectOf({}),
  title: PropTypes.objectOf({}),
};

Scan.defaultProps = {
  id: null,
  title: null,
};
