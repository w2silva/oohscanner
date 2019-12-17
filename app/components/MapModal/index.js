/**
 *
 * MapModal
 *
 */

import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};

function MapModal() {

  let mapComponent = null
  useEffect(() => {
    mapComponent = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397, 
        lng: 150.644
      },
      zoom: 8
    });

    return () => {
      // do nothing
    }
  })

  return (
    <React.Fragment>
      <ReactModal
        isOpen={
          true
        /* Boolean describing if the modal should be shown or not. */}

        closeTimeoutMS={
          0
        /* Number indicating the milliseconds to wait before closing
          the modal. */}

        style={
          customStyles
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
          <div id="map"></div>
      </ReactModal>
    </React.Fragment>
  );
}

MapModal.propTypes = {};

export default memo(MapModal);
