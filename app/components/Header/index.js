import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import Wrapper from './Wrapper';
import Button from './Button';
import NavRight from './NavRight';
import LogoImage from 'images/logoh.png';
import messages from './messages';

function Header() {
  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Row between="xs" middle={'xs'}>
            <Col xs={12} sm={3}>
              <A href="https://www.reactboilerplate.com/">
                <Img src={LogoImage} alt="Logo" />
              </A>
            </Col>
            <Col xs={12} sm={6}></Col>
            <Col xs={12} sm={3}>
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
