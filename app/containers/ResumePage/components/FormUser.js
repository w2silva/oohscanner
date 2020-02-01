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

export function FormUser({
  firstName,
  lastName,
  email,
  phoneNumber,
  onFormSubmit,
  onInputChange
}) {
  return (
    <React.Fragment>
      <Form onSubmit={onFormSubmit}>
        <Row>
          <Col xs={12} sm={6}>
            <FormGroup>
              <FormLabel>Nome</FormLabel>
              <Input
                type={'text'}
                name={'firstName'}
                value={firstName}
                onChange={onInputChange('firstName')}
              />
            </FormGroup>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup>
              <FormLabel>Sobrenome</FormLabel>
              <Input
                type={'text'}
                name={'lastName'}
                value={lastName}
                onChange={onInputChange('lastName')}
              />
            </FormGroup> 
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <FormGroup>
              <FormLabel>E-mail</FormLabel>
              <Input
                type={'text'}
                name={'email'}
                value={email}
                onChange={onInputChange('email')}
              />
            </FormGroup>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup>
              <FormLabel>Telefone</FormLabel>
              <Input
                type={'text'}
                name={'phoneNumber'}
                value={phoneNumber}
                onChange={onInputChange('phoneNumber')}
              />
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
