/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import 'oj-c/input-password';
import "oj-c/button";
import 'ojs/ojdatetimepicker';
import 'ojs/ojlabel';
import 'ojs/ojformlayout';
import "oj-c/input-number";
import * as ResponsiveUtils from 'ojs/ojresponsiveutils';
import Message = require('ojs/ojmessaging');
import { IntlConverterUtils } from 'ojs/ojconverterutils-i18n';
import { ojDatePicker } from 'ojs/ojdatetimepicker';
class DashboardViewModel {
  value: ko.Observable<string>;
  password: ko.Observable<string>;
  username: ko.Observable<string> | ko.Observable<any>;
  first_name: ko.Observable<string> | ko.Observable<any>;
  last_name: ko.Observable<string> | ko.Observable<any>;
  email_id: ko.Observable<string> | ko.Observable<any>;
  address: ko.Observable<string> | ko.Observable<any>;
  datePickerMonths: ojDatePicker['datePicker'];
  datePickerWeek: ojDatePicker['datePicker'];
  largeScreenMatch: MediaQueryList;
  numberOfMonths: number;
  phone_number: ko.Observable<string>;
  date_of_birth: ko.Observable<string>;
  button2Text: string;
  clickedButton: ko.Observable<string>;
  constructor() {
    this.value = ko.observable("");
    this.username = ko.observable(null);
    this.password = ko.observable("");
    this.first_name = ko.observable("");
    this.last_name = ko.observable("");
    this.date_of_birth = ko.observable("");
    this.email_id = ko.observable("");
    this.phone_number = ko.observable("");
    this.address = ko.observable("");
    this.date_of_birth = ko.observable(IntlConverterUtils.dateToLocalIsoDateString(new Date(2014, 1, 1)));
  
      // this.error = [{ summary: 'summary', detail: 'detail', severity: 'error' }];
      // this.warning = [{ summary: 'summary', detail: 'detail', severity: 'warning' }];
      // this.info = [{ summary: 'summary', detail: 'detail', severity: 'info' }];
      // this.confirmation = [{ summary: 'summary', detail: 'detail', severity: 'confirmation' }];
      
      let mdQuery = ResponsiveUtils.getFrameworkQuery('md-up') || '(min-width: 768px)';
      // if (mdQuery != null) {
        this.largeScreenMatch = window.matchMedia(mdQuery);
      // }
    this.button2Text = "Button 2";

    this.clickedButton = ko.observable("(None clicked yet)");
    this.numberOfMonths = this.largeScreenMatch.matches ? 2 : 1;
  
      this.datePickerMonths = {
        numberOfMonths: this.numberOfMonths
      };
  
      this.datePickerWeek = {
        weekDisplay: 'number'
      };
  }

    public buttonAction = async (event: Event) => {
    console.log("Button is clicked");
    // let username = this.username();
    let URL = "http://localhost:8082/customercrudapi/customer" ;//+ username;
    // let res = await fetch(URL);
    // let JSONData = await res.json();
    // console.log("The data collected is", JSONData);
    // console.log(typeof JSONData.username);
    // let name_arr = JSONData.name.split(" ");
    // console.log(name_arr);
    
    // Create row object based on form inputs
    const row = {
      first_name : this.first_name(),
      last_name : this.last_name(),
      date_of_birth: this.date_of_birth(),
      email_id: this.email_id(),
      username: this.username(),
      password: this.password(),
      phone_number: this.phone_number(),
      address: this.address()
    };
    // Create and send request to REST service to add row
    const request = new Request(URL, {
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify(row),
      method: "POST",
    });
    const response = await fetch(request);
    const addedRow = await response.json();
    // Create add mutate event and call mutate method
    // to notify dataprovider consumers that a row has been
    // added
    // const addedRowIndex = addedRow.index;
    // delete addedRow.index;
    // const addedRowKey = addedRow[this.keyAttributes];
    // const addedRowMetaData = { key: addedRowKey };
    // this.dataprovider.mutate({
    //   add: {
    //     data: [addedRow],
    //     indexes: [addedRowIndex],
    //     keys: new Set([addedRowKey]),
    //     metadata: [addedRowMetaData],
    //   },
    // });
   if(addedRow){
    console.log(" Successful");
   }else{
    console.log("Wrong credentials");
   }
  
}
}
export = DashboardViewModel;
