/**
 *
 * FormUser
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from '../styles/Button';
import Form from './../styles/Form';
import FormGroup from './../styles/FormGroup';
import FormLabel from './../styles/FormLabel';
import Input from './../styles/Input';

export function FormUser() {
  return (
    <React.Fragment>
      <Form>
        <Row>
          <Col xs={12} sm={6}>
            <FormGroup>
              <FormLabel>Nome</FormLabel>
              <Input />
            </FormGroup>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup>
              <FormLabel>Sobrenome</FormLabel>
              <Input />
            </FormGroup> 
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <FormGroup>
              <FormLabel>E-mail</FormLabel>
              <Input />
            </FormGroup>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup>
              <FormLabel>Confirme o E-mail</FormLabel>
              <Input />
            </FormGroup> 
          </Col>
        </Row>
        <FormGroup align={'right'}>
          <Button type={'submit'}>Enviar</Button>
        </FormGroup>
      </Form>
    </React.Fragment>
  );
}

FormUser.propTypes = {
  // nothing
};

export default compose(memo)(FormUser);
