/**
 *
 * SearchBox
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DatePicker from "react-datepicker";
import ReactSelect from 'react-select';
import "react-datepicker/dist/react-datepicker.css";

import InputRegion from 'components/InputRegion';
import {
  Wrapper, 
  Container,
  H1, 
  Form,
  FormGroup,
  FormLabel,
  FlareBar,
  Select,
  Button,
  StyledDatePicker
} from '../styles';

function SearchBox({ 
  mediaTypesList,
  citiesList,
  mediaType, 
  region, 
  startDate, 
  endDate, 
  onChangeMediaType, 
  onChangeRegion, 
  onChangeLocationBounds, 
  onChangeStartDate, 
  onChangeEndDate, 
  onSubmitForm 
}) {
  const [mediaTypeState, setMediaTypeState] = useState(mediaType);
  const optionsMedias = mediaTypesList.map((item, index) => ({
    label: item.TIP,
    value: item.TIP
  }))
  optionsMedias.unshift({
    label: "TODAS",
    value: null
  });

  useEffect(() => {
    setMediaTypeState({ 
      label: mediaType == null ? "TODAS" : mediaType, 
      value: mediaType == null ? null : mediaType
    });
  }, [mediaType])

  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <Grid>
            <H1>
              Onde Vamos Anunciar ?
            </H1>
            <Form onSubmit={onSubmitForm}>
              <Row>
                <Col xs={12} sm={6} md={4}>
                  <FormGroup>
                    <FormLabel htmlFor="mediaType">Tipo de Midia</FormLabel>
                    <ReactSelect
                      autoFocus={true}
                      isSearchable={true}
                      className="input-control"
                      classNamePrefix="input"
                      placeholder="Selecione um tipo de mídia"
                      value={mediaTypeState}
                      onChange={(selected) => onChangeMediaType(selected.value, 'searchBox')}
                      options={optionsMedias}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <FormGroup>
                    <FormLabel htmlFor="region">Região (selecionar no mapa)</FormLabel>
                    <InputRegion 
                      citiesList={citiesList}
                      onChangeRegion={onChangeRegion}
                      onChangeLocationBounds={onChangeLocationBounds}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <FormGroup>
                    <FormLabel htmlFor="startDate">Periodo</FormLabel>
                    <StyledDatePicker>
                      <DatePicker
                        selected={startDate}
                        onChange={onChangeStartDate}
                      />
                      <DatePicker
                        selected={endDate}
                        onChange={onChangeEndDate}
                      />
                    </StyledDatePicker>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup align={'right'}>
                <Button type={'submit'}>Buscar</Button>
              </FormGroup>
            </Form>
          </Grid>
        </Container>
        <FlareBar>
          <svg viewBox="0 0 14832 55" className="bpk-flare-bar_bpk-flare-bar__curve__3z1de">
            <path d="M7501.307 8.517l-68.043 39.341c-10.632 6.185-23.795 6.185-34.528 0l-68.144-39.34c-8.91-5.173-18.988-8.215-29.316-8.518H0v55h14832V0H7530.671a63.604 63.604 0 0 0-29.364 8.517z"></path>
          </svg>
        </FlareBar>
      </Wrapper>
    </React.Fragment>
  );
}

SearchBox.propTypes = {};

export default memo(SearchBox);
