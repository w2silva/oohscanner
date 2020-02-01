import styled from 'styled-components';
import NormalH1 from 'components/H1';
import NormalH3 from 'components/H3';
import buttonStyles from 'components/Button/buttonStyles';
import { device } from 'utils/device';
import LargeFlightsHero from 'images/large-flights-hero.jpg';

export const Section = styled.section`
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;

export const CenteredSection = styled(Section)`
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: 2em 0px;
  background-color: #032759;
  border-radius: .25rem;

  @media ${device.laptop} {
    /* padding: 2.75em 1.5rem; */
    padding: 1.5rem;
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  color: white;
  font-size: 1em;
  font-weight: normal;
  margin: 0px 0px 1em 0px;
`;

export const FormGroup = styled.div`
  margin: 0px 0px 1.2em 0px;
  text-align: ${props => 
    props.align ? props.align : 'left'};
`;

export const FlareBar = styled.div`
  width: 100%;
  align-items: flex-end;
  align-self: flex-end;
  flex: 1 1 auto;
  height: 1.125rem;
  position: relative;
  min-width: 10rem;
  height: 1.5rem;
  overflow: hidden;

  svg {
    overflow: hidden;
    position: absolute;
    bottom: -1px;
    width: 700rem;
    height: 1.125rem;
    margin-left: 50%;
    transform: translateX(-50%);
    fill: #f1f2f8;
  }

  @media ${device.laptop} {

    svg {
      height: 1.5rem;
    }
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border-right-width: 0;
  border-radius: .25rem 0 0 .25rem;
  height: 3rem;
  text-overflow: ellipsis;

  padding: .375rem .75rem;
  border: .0625rem solid #b2b2bf;
  border-radius: .25rem;
  background: #fff;
  color: #111236;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  outline: none;
  border-right-width: 0;
  border-radius: .25rem 0 0 .25rem;
  height: 3rem;
  text-overflow: ellipsis;

  padding: .375rem .75rem;
  border: .0625rem solid #b2b2bf;
  border-radius: .25rem;
  background: #fff;
  color: #111236;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const H1 = styled(NormalH1)`
  display: none;
  color: #fff;
  font-size: 2.75rem !important;
  line-height: 1.3 !important;

  @media ${device.laptop} {
    display: block;
    font-weight: bold;
  }
`;

export const H3 = styled(NormalH3)`
  color: #111236;
  font-size: 1.05rem !important;
  line-height: 1 !important;
  margin: 0px 0px 15px 0px;
`;

export const Button = styled.button`
  ${buttonStyles};

  display: inline-block;
  width: 100%;
  padding: .375rem 1.5rem;
  font-size: 1.5rem;
  line-height: 1.875rem;

  @media ${device.laptop} {
    width: auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #032759;
  padding: 0px;

  @media ${device.laptop} {
    min-height: 500px;
    background-color: #d7d7d8;
    background-image: url(${LargeFlightsHero});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  @media ${device.laptop} {
    padding: 3.75em 15px 15px 15px;
  }
`;

export const StyledDatePicker = styled.div`
  display: flex;
  flex-direction: row;
  border: .0625rem solid #b2b2bf;
  border-radius: .25rem;

  input {
    display: inline-block;
    width: 100%;
    border: none;
    border-radius: 0px;
  }

  .react-datepicker-wrapper {
    flex: 1 1 auto;

    .react-datepicker__input-container {
      width: 100%;
    }
  }
`;

export const StyledWrapperFilter = styled.div`
  display: ${props => 
    props.isMobile ? 'block' : 'none'};
  width: 100%;
  min-height: 320px;
  background-color: transparent;
  margin: 0px 0px 1.4em 0px;

  @media ${device.laptop} {
    display: block;
  }
`;

export const StyledModalFilter = styled.div`
  .modal {
    padding: 0px !important;

    .modal-dialog {
      margin: 0px;
    }

    .modal-content {
      border: none;
      border-radius: 0px;
    }

    .close {
      font-size: 1em;
      font-weight: bold;
      color: #00a698;
    }
  }
`;

export const AccordionWrapper = styled.div`
  display: block;
  width: 100%;
  flex-direction: row;
`;

export const AccordionToggle = styled.button`
  width: 100%;
  padding: .375rem 0;
  border: 0;
  background-color: transparent;
  box-shadow: inset 0 -1px 0 0 #dddde5;
  margin: 0px 0px 5px 0px;
  text-align: left;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #02122c;
  color: var(--bpk-accordion-color, #02122c);
`;

export const AccordionText = styled.span`
  display: inline-block;
  flex-grow: 1;
`;

export const AccordionCheckbox = styled.div`
  display: block;
  margin: 10px;

  span {
    font-size: .8em;

    &:hover,
    &:focus {
      color: #0770e3;
    }
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding-left: 1.5rem;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: normal;
`;

export const Checkbox = styled.input`
  position: absolute;
  top: .1875rem;
  left: 0;
  width: 1.125rem;
  height: 1.125rem;
  margin: 0;
  padding: 0;
  border: 0;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMy45OTUgMGgxMC4wMUEzLjk5NyAzLjk5NyAwIDAgMSAxOCAzLjk5NXYxMC4wMUEzLjk5NyAzLjk5NyAwIDAgMSAxNC4wMDUgMThIMy45OTVBMy45OTcgMy45OTcgMCAwIDEgMCAxNC4wMDVWMy45OTVBMy45OTcgMy45OTcgMCAwIDEgMy45OTUgMHoiLz48cGF0aCBmaWxsPSIjQjJCMkJGIiBkPSJNMSAxNC4wMDVBMi45OTcgMi45OTcgMCAwIDAgMy45OTUgMTdoMTAuMDFBMi45OTcgMi45OTcgMCAwIDAgMTcgMTQuMDA1VjMuOTk1QTIuOTk3IDIuOTk3IDAgMCAwIDE0LjAwNSAxSDMuOTk1QTIuOTk3IDIuOTk3IDAgMCAwIDEgMy45OTV2MTAuMDF6TTMuOTk1IDBoMTAuMDFBMy45OTcgMy45OTcgMCAwIDEgMTggMy45OTV2MTAuMDFBMy45OTcgMy45OTcgMCAwIDEgMTQuMDA1IDE4SDMuOTk1QTMuOTk3IDMuOTk3IDAgMCAxIDAgMTQuMDA1VjMuOTk1QTMuOTk3IDMuOTk3IDAgMCAxIDMuOTk1IDB6Ii8+PC9nPjwvc3ZnPg==) no-repeat;
  cursor: pointer;
  vertical-align: text-bottom;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;

  &:checked {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMy45OTUgMGgxMC4wMUEzLjk5NyAzLjk5NyAwIDAgMSAxOCAzLjk5NXYxMC4wMUEzLjk5NyAzLjk5NyAwIDAgMSAxNC4wMDUgMThIMy45OTVBMy45OTcgMy45OTcgMCAwIDEgMCAxNC4wMDVWMy45OTVBMy45OTcgMy45OTcgMCAwIDEgMy45OTUgMHoiLz48cGF0aCBmaWxsPSIjQjJCMkJGIiBkPSJNMSAxNC4wMDVBMi45OTcgMi45OTcgMCAwIDAgMy45OTUgMTdoMTAuMDFBMi45OTcgMi45OTcgMCAwIDAgMTcgMTQuMDA1VjMuOTk1QTIuOTk3IDIuOTk3IDAgMCAwIDE0LjAwNSAxSDMuOTk1QTIuOTk3IDIuOTk3IDAgMCAwIDEgMy45OTV2MTAuMDF6TTMuOTk1IDBoMTAuMDFBMy45OTcgMy45OTcgMCAwIDEgMTggMy45OTV2MTAuMDFBMy45OTcgMy45OTcgMCAwIDEgMTQuMDA1IDE4SDMuOTk1QTMuOTk3IDMuOTk3IDAgMCAxIDAgMTQuMDA1VjMuOTk1QTMuOTk3IDMuOTk3IDAgMCAxIDMuOTk1IDB6Ii8+PHBhdGggZmlsbD0iIzA3NzBlMyIgZD0iTTcuNDcxIDEzLjMwN2MtLjI4NCAwLS40OTgtLjA3MS0uNzExLS4yODVMNC4yIDEwLjgxOGMtLjIxMy0uMjE0LS4yODUtLjU3LS4wNzEtLjc4MmwuNzgyLS44NTRjLjE0Mi0uMjEzLjQ5OC0uMjEzLjc4Mi0uMDdsMS41NjUgMS4yOGMuMDcuMDcuMjEzLjA3LjM1NSAwTDEyLjE2NCA1LjJjLjIxNC0uMjEzLjU3LS4yODUuNzgzLS4wNzFsLjg1My43ODJjLjIxMy4yMTMuMjg1LjU2OS4wNzEuNzgyTDguMzk2IDEyLjg4Yy0uMjg1LjM1Ni0uNTcuNDI3LS45MjUuNDI3eiIvPjwvZz48L3N2Zz4=) no-repeat;
  }
`;

