/**
 *
 * CampaignSearchBox
 *
 */

import React, { memo, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FormattedMessage } from 'react-intl';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import InputRegion from 'components/InputRegion';
import Button from './Button';
import Form from './Form';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import Input from './Input';
import Select from './Select';
import Wrapper from './Wrapper';
import H1 from './H1';
import messages from './messages';

function CampaignSearchBox({ 
  username, 
  onChangeUsername, 
  onSubmitForm 
}) {

  const [startDateState, setStartDateState] = useState(new Date());
  const [toggleModalState, setToggleModalState] = useState(false);
  const handleChange = date => {
    setStartDateState(date);
  };
  const toggleModal = event => {
    setToggleModalState(!toggleModalState)
  }

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
                  <Select
                    id="username"
                    type="text"
                    placeholder="mxstbr"
                    value={username}
                    onChange={onChangeUsername}
                  >
                    <option value="">Selection um tipo de mídia</option>
                    <option value="">Midia 1</option>
                    <option value="">Midia 2</option>
                    <option value="">Midia 3</option>
                  </Select>
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup>
                  <FormLabel htmlFor="username">Região (selectionar no mapa)</FormLabel>
                  <InputRegion />
                </FormGroup>
              </Col>
              <Col xs={2}>
                <FormGroup>
                  <FormLabel htmlFor="username">Periodo</FormLabel>
                  <DatePicker
                    selected={startDateState}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col xs={2}>
                <FormGroup>
                  <FormLabel htmlFor="username">&nbsp;</FormLabel>
                  <DatePicker
                    selected={startDateState}
                    onChange={handleChange}
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
