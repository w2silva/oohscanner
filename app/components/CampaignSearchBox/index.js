/**
 *
 * CampaignSearchBox
 *
 */

import React, { memo } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { FormattedMessage } from 'react-intl';
import Button from './Button';
import Form from './Form';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import Input from './Input';
import Wrapper from './Wrapper';
import H1 from './H1';
import messages from './messages';

function CampaignSearchBox({ username, onChangeUsername, onSubmitForm }) {
  return (
    <React.Fragment>
      <Wrapper>
        <Grid>
          <H1>
            <FormattedMessage {...messages.titleSection} />
          </H1>
          <Form onSubmit={onSubmitForm}>
            <Row>
              <Col xs={4}>
                <FormGroup>
                  <FormLabel htmlFor="username">Tipo de Midia</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup>
                  <FormLabel htmlFor="username">Região (selectionar no mapa)</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </FormGroup>
              </Col>
              <Col xs={2}>
                <FormGroup>
                  <FormLabel htmlFor="username">Periodo</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </FormGroup>
              </Col>
              <Col xs={2}>
                <FormGroup>
                  <FormLabel htmlFor="username">&nbsp;</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </FormGroup>
              </Col>
            </Row>
            <div style={{ textAlign: 'right' }}>
              <Button type={'submit'}>Buscar</Button>
            </div>
          </Form>
        </Grid>
      </Wrapper>
    </React.Fragment>
  );
}

CampaignSearchBox.propTypes = {};

export default memo(CampaignSearchBox);
