/*
 * Header
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { Grid, Row, Col } from 'react-flexbox-grid';

import makeSelectSelectedMedias from 'redux/selectors/SelectedMedias';

import A from './components/A';
import Img from './components/Img';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import NavRight from './components/NavRight';
import LogoImage from 'images/logoh.png';
import MapIcon from 'images/map-icon.jpg';
import { ShoppingCart } from './styles';
import messages from './messages';

function Header({
  history, 
  selectedMedias
}) {
  const { selectedMediasList } = selectedMedias
  const mediasCounter = selectedMediasList.length;

  function onClick() {
    history.push("/resume")
  }

  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <Row between="xs" middle={'xs'}>
            <Col xs={6}>
              <A href="/">
                <Img src={LogoImage} alt="Logo" />
              </A>
            </Col>
            <Col xs={6}>
              <NavRight>
                <ShoppingCart>
                  <Img src={MapIcon} alt="Icone" />
                  {mediasCounter > 0 && <span className="badget">{mediasCounter}</span>}
                </ShoppingCart>
                <Button onClick={onClick}>
                  <span>Solicitar campanha</span>
                </Button>
              </NavRight>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  selectedMedias: makeSelectSelectedMedias()
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter, 
  memo,
)(Header);
