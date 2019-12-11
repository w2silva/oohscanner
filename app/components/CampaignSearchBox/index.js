/**
 *
 * CampaignSearchBox
 *
 */

import React, { memo, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FormattedMessage } from 'react-intl';
import DatePicker from "react-datepicker";
import ReactModal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";

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
  const handleChange = date => {
    setStartDateState(date);
  };

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

        <ReactModal
          isOpen={
            false
          /* Boolean describing if the modal should be shown or not. */}

          closeTimeoutMS={
            0
          /* Number indicating the milliseconds to wait before closing
            the modal. */}

          style={
            { overlay: {}, content: {} }
          /* Object indicating styles to be used for the modal.
            It has two keys, `overlay` and `content`.
            See the `Styles` section for more details. */}

          contentLabel={
            "Example Modal"
          /* String indicating how the content container should be announced
            to screenreaders */}

          portalClassName={
            "ReactModalPortal"
          /* String className to be applied to the portal.
            See the `Styles` section for more details. */}

          overlayClassName={
            "ReactModal__Overlay"
          /* String className to be applied to the overlay.
            See the `Styles` section for more details. */}

          id={
            "some-id"
          /* String id to be applied to the content div. */}

          className={
            "ReactModal__Content"
          /* String className to be applied to the modal content.
            See the `Styles` section for more details. */}

          bodyOpenClassName={
            "ReactModal__Body--open"
          /* String className to be applied to the document.body 
            (must be a constant string).
            This attribute when set as `null` doesn't add any class 
            to document.body.
            See the `Styles` section for more details. */}

          htmlOpenClassName={
            "ReactModal__Html--open"
          /* String className to be applied to the document.html
            (must be a constant string).
            This attribute is `null` by default.
            See the `Styles` section for more details. */}

          ariaHideApp={
            true
          /* Boolean indicating if the appElement should be hidden */}

          shouldFocusAfterRender={
            true
          /* Boolean indicating if the modal should be focused after render. */}

          shouldCloseOnOverlayClick={
            true
          /* Boolean indicating if the overlay should close the modal */}

          shouldCloseOnEsc={
            true
          /* Boolean indicating if pressing the esc key should close the modal
            Note: By disabling the esc key from closing the modal
            you may introduce an accessibility issue. */}

          shouldReturnFocusAfterClose={
            true
          /* Boolean indicating if the modal should restore focus to the element
            that had focus prior to its display. */}

          role={
            "dialog"
          /* String indicating the role of the modal, allowing the 'dialog' role
            to be applied if desired.
            This attribute is `dialog` by default. */}

          parentSelector={
            () => document.body
          /* Function that will be called to get the parent element
            that the modal will be attached to. */}

          aria={
            {
              labelledby: "heading",
              describedby: "full_description"
            }
          /* Additional aria attributes (optional). */}

          data={
            { background: "green" }
          /* Additional data attributes (optional). */}>
            <p>Modal Content</p>
        </ReactModal>
      </Wrapper>
    </React.Fragment>
  );
}

CampaignSearchBox.propTypes = {};

export default memo(CampaignSearchBox);
