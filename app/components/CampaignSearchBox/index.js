/**
 *
 * CampaignSearchBox
 *
 */

import React, { memo } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import Form from './Form';
import Input from './Input';
import messages from './messages';

function CampaignSearchBox({ username, onChangeUsername, onSubmitForm }) {
  return (
    <React.Fragment>
      <FormattedMessage {...messages.trymeMessage} />
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="username">
          <FormattedMessage {...messages.trymeMessage} />
          <Row>
            <Col xs={4}>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </Col>
            <Col xs={4}>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </Col>
            <Col xs={2}>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </Col>
            <Col xs={2}>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </Col>
          </Row>
          <Button>Search</Button>
        </label>
      </Form>
    </React.Fragment>
  );
}

CampaignSearchBox.propTypes = {};

export default memo(CampaignSearchBox);
