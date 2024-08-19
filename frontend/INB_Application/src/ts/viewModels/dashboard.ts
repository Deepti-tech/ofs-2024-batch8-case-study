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
class DashboardViewModel {
  value: ko.Observable<string>;
  password: ko.Observable<string>;
  username: ko.Observable<string> | ko.Observable<any>;
  button2Text: string;
  clickedButton: ko.Observable<string>;
  constructor() {
    this.value = ko.observable("");
    this.username = ko.observable(null);
    this.password = ko.observable("");
    this.button2Text = "Button 2";
    this.clickedButton = ko.observable("(None clicked yet)");
  }

    public buttonAction = async (event: Event) => {
    console.log("Button is clicked");
    // let username = this.username();
    let URL = "http://localhost:8082/customercrudapi/customerAuthentication" ;//+ username;
    // let res = await fetch(URL);
    // let JSONData = await res.json();
    // console.log("The data collected is", JSONData);
    // console.log(typeof JSONData.username);
    // let name_arr = JSONData.name.split(" ");
    // console.log(name_arr);
    
    // Create row object based on form inputs
    const row = {
      username: this.username(),
      password: this.password()
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
