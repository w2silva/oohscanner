import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import A from './components/A';
import Img from './components/Img';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import NavRight from './components/NavRight';
import LogoImage from 'images/logoh.png';
import messages from './messages';

function Header() {
  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Row between="xs" middle={'xs'}>
            <Col xs={6}>
              <A href="https://www.reactboilerplate.com/">
                <Img src={LogoImage} alt="Logo" />
              </A>
            </Col>
            <Col xs={6}>
              <NavRight>
                <Button onClick={() => null}>
                  <span>Entrar</span>
                </Button>
              </NavRight>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
}

export default Header;
