import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import Wrapper from './Wrapper';
import LogoImage from 'images/logoh.png';
import messages from './messages';

function Header() {
  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Row middle={'xs'}>
            <Col xs={3}>
              <A href="https://www.reactboilerplate.com/">
                <Img src={LogoImage} alt="react-boilerplate - Logo" />
              </A>
            </Col>
            <Col xs={6}></Col>
            <Col xs={3}>
              <A href="https://www.reactboilerplate.com/">
                <span>Entrar</span>
              </A>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
}

export default Header;
