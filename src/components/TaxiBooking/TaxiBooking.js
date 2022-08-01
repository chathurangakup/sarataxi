import React, { useEffect, useState } from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  HeroBtn,
  InfoTitle,
  HeroBtnContainer,
  ErrorMessageP,
} from "./TaxiBookingElements";
import { Container, Button } from "../../globalStyles";
import { Input } from "../textInput/TextInput";
import { DatePicker } from "../datePicker/DatePicker";
import { TimePickerComp } from "../timePicker/TimePickerComp";

import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export const TaxiBooking = ({ primary, lightBg, imgStart }) => {
  const [changeDate, onChangeDate] = useState(moment());
  const [focus, onChangeFocus] = useState(false);
  const [timestate, onChangeTimeState] = useState(new Date());
  const [name, onChangeName] = useState("");
  const [pickupLocation, onChangePickupLocation] = useState("");
  const [dropLocation, onChangeDropLocation] = useState("");
  const [mobile, onChangeMobileNo] = useState("");

  const [isEmptyYourName, onChangeIsEmptyYourName] = useState(false);
  const [isEmptyPickupLocation, onChangeIsEmptyPickupLocation] =
    useState(false);
  const [isEmptyDropLocation, onChangeIsEmptyDropLocation] = useState(false);
  const [isEmptyMobileNum, onChangeIsEmptyMobileNum] = useState(false);

  const onChangedate = (date) => {
    console.log("date", date.format("DD/MM/YYYY"));
    onChangeDate(date);
  };

  const onFocusChanged = (focus) => {
    onChangeFocus(focus);
  };

  const onChangeTime = (time) => {
    onChangeTimeState(time);
  };

  const yourNameChange = (name) => {
  console.log(name)
    onChangeName(name);
    onChangeIsEmptyYourName(false);
    onChangeIsEmptyPickupLocation(false);
    onChangeIsEmptyDropLocation(false);
    onChangeIsEmptyMobileNum(false);
    
  };

  const yourPickupLocation = (pickup) => {
    onChangePickupLocation(pickup);
    onChangeIsEmptyYourName(false);
    onChangeIsEmptyPickupLocation(false);
    onChangeIsEmptyDropLocation(false);
    onChangeIsEmptyMobileNum(false);
  };

  const yourDropLocation = (drop) => {
    onChangeDropLocation(drop);
    onChangeIsEmptyYourName(false);
    onChangeIsEmptyPickupLocation(false);
    onChangeIsEmptyDropLocation(false);
    onChangeIsEmptyMobileNum(false);
  };

  const yourMobileNum = (mobile) => {
    onChangeMobileNo(mobile);
    onChangeIsEmptyYourName(false);
    onChangeIsEmptyPickupLocation(false);
    onChangeIsEmptyDropLocation(false);
    onChangeIsEmptyMobileNum(false);
  };

  const onClickBtn = async () => {
     if(name==''){
       onChangeIsEmptyYourName(true);
    }
     if(pickupLocation==''){
      onChangeIsEmptyPickupLocation(true);
    }
     if(dropLocation==''){
      onChangeIsEmptyDropLocation(true);
    }
     if(mobile==''){
      onChangeIsEmptyMobileNum(true);
    }
    
    checkFunction();
    
  };



  const checkFunction=async()=>{
    if(name !== '' && pickupLocation!=='' && dropLocation!=='' && mobile!==''){
      let changeTimeFormat;
      let isValidDate = Date.parse(timestate);
      console.log("timestate",timestate)
      console.log("timestate",isValidDate)
      if (isValidDate !== NaN) {
        changeTimeFormat = timestate;
      } else {
        let minutes =
          timestate.getMinutes().toString().length == 1
            ? "0" + timestate.getMinutes()
            : timestate.getMinutes();
        let hours =
          timestate.getHours().toString().length == 1
            ? "0" + timestate.getHours()
            : timestate.getHours();
        changeTimeFormat = hours + ":" + minutes;
      }
  
      const data = {
        UserName: name,
        OrderedDate: new Date().toISOString().slice(0, 10), //todat date
        PickupLocation: pickupLocation,
        DropLocation: dropLocation,
        MobileNumber: mobile,
        Time: changeTimeFormat,
        TaxiDate: changeDate.toISOString().slice(0, 10), //taxi booked date
       
      };

      console.log(data)
      console.log(name)
  
      await axios
        .post(
          "https://sheet.best/api/sheets/eceac5d7-056e-4558-8090-0b342ad545dd",
          data
        )
        .then(function (response) {
          console.log(response);
          window.alert("success");
          onChangeDate(moment());
          onChangeTimeState(new Date());
          onChangeName("");
          onChangePickupLocation("");
          onChangeDropLocation("");
          onChangeMobileNo("");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    }
  }

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoTitle>{"Book Your Taxi"}</InfoTitle>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <h3>Your Name</h3>
              <Input
                type="text"
                onChange={(e) => yourNameChange(e.target.value)}
                value={name}
              />
              {isEmptyYourName ? (
                <ErrorMessageP>* Pleace enter Your Name</ErrorMessageP>
              ) : null}
            </InfoColumn>
            <InfoColumn>
              <h3>Pickup Location</h3>
              <Input
                type="text"
                onChange={(e) => yourPickupLocation(e.target.value)}
                value={pickupLocation}
              />
              {isEmptyPickupLocation ? (
                <ErrorMessageP>* Pleace enter Pickup Location</ErrorMessageP>
              ) : null}
            </InfoColumn>
            <InfoColumn>
              <h3>Drop Location</h3>
              <Input
                type="text"
                onChange={(e) => yourDropLocation(e.target.value)}
                value={dropLocation}
              />
              {isEmptyDropLocation ? (
                <ErrorMessageP>* Pleace enter Drop Location</ErrorMessageP>
              ) : null}
            </InfoColumn>
            <InfoColumn>
              <h3>Mobile Number</h3>
              <Input
                type="tel"
                onChange={(e) => yourMobileNum(e.target.value)}
                value={mobile}
              />
              {isEmptyMobileNum ? (
                <ErrorMessageP>* Pleace enter Mobile Number</ErrorMessageP>
              ) : null}
            </InfoColumn>
            <InfoColumn>
              <h3>Booking Date</h3>
              <DatePicker
                onChangedate={onChangedate}
                date={changeDate}
                onFocusChanged={onFocusChanged}
                focused={focus}
              />
            </InfoColumn>
            <InfoColumn>
              <h3>Booking Time</h3>
              <TimePickerComp time={timestate} onChangeTime={onChangeTime} />
            </InfoColumn>
          </InfoRow>
          <HeroBtnContainer>
            <HeroBtn onClick={() => onClickBtn()}>SEND</HeroBtn>
          </HeroBtnContainer>
        </Container>
      </InfoSec>
    </>
  );
};

// export default InfoSection;
