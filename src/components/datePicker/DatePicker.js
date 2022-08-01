import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

import styled from "styled-components";
import "react-dates/lib/css/_datepicker.css";

/* https://github.com/airbnb/react-dates/issues/1030
 * In-order to extend styling, wrapper div around date picker is needed.
 */

const StyledDatePickerWrapper = styled.div`
  /* .SingleDatePickerInput {
     .DateInput {
      width: 100%;
      height: 40px;
      display: flex;

       .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        padding: 1rem 17rem 1rem;
      } 
     }
    } */

    font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  /* margin-top: 20px; */
  margin-bottom: 20px;
  width: 70%;
  font-size: 1rem;
  background: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }


`;

export const  DatePicker=({onChangedate,date,onFocusChanged,focused})=>{


    return (
      <StyledDatePickerWrapper>
        <SingleDatePicker
          numberOfMonths={1}
          onDateChange={(data)=>onChangedate(data)}
          onFocusChange={({focused})=>onFocusChanged(focused)}
         focused={focused}
          date={date}
        />
      </StyledDatePickerWrapper>
    );
}
