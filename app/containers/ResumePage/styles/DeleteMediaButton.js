/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import A from 'components/A';

export default styled(A)`
  cursor: pointer;
  color: red !important;
  text-decoration: none;
  font-size: .8em;

  &:hover {
    text-decoration: underline !important;
  }
`;
