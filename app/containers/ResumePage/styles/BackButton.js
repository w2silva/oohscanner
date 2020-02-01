/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import A from 'components/A';

export default styled(A)`
  cursor: pointer;
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`;
