import styled from 'styled-components';

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

export const Input = styled.input`
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
