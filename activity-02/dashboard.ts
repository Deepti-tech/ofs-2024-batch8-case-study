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
import "oj-c/input-number";
import 'oj-c/input-password';
import Message = require("ojs/ojmessaging");
import "ojs/ojlabel";
import "ojs/ojformlayout";
import "ojs/ojdatetimepicker";
import { IntlConverterUtils } from "ojs/ojconverterutils-i18n";
import "oj-c/button";
import 'oj-c/message-toast';
import { MessageBannerItem, CMessageBannerElement } from 'oj-c/message-banner';
import MutableArrayDataProvider = require('ojs/ojmutablearraydataprovider');
import "oj-c/progress-bar";
import 'oj-c/message-banner';
class DashboardViewModel {
  value: ko.Observable<string>;
  password: ko.Observable<string>;
  firstname: ko.Observable<string> | ko.Observable<any>;
  salary: ko.Observable<number> | ko.Observable<any>;
  error: Message[];
  warning: Message[];
  info: Message[];
  confirmation: Message[];
  rawValue: ko.Observable<string>;
  date: ko.Observable<string>;
  button2Text: string;
    clickedButton: ko.Observable<string>;
    readonly messages: MutableArrayDataProvider<string, Record<string, any>>;
  
    /**
     * Handles ojClose event and removes the corresponding message from the data.
     * @param event The ojClose event
     */
    readonly closeMessage = (event: CustomEvent) => {
      let data = this.messages.data.slice();
      const closeMessageKey = event.detail.key;
  
      data = data.filter((message) => (message as any).id !== closeMessageKey);
      this.messages.data = data;
    };
    private readonly step = ko.observable(0);
    readonly progressValue = ko.pureComputed(() => {
      return Math.min(this.step(), 100);
    });
    
  constructor() {
    this.value = ko.observable("");
    this.firstname = ko.observable(null);
    this.salary = ko.observable(null);
    this.password = ko.observable("password");
    this.error = [{ summary: "summary", detail: "detail", severity: "error" }];
      this.warning = [
        { summary: "summary", detail: "detail", severity: "warning" },
      ];
      this.info = [{ summary: "summary", detail: "detail", severity: "info" }];
      this.confirmation = [
        { summary: "summary", detail: "detail", severity: "confirmation" },
      ];
      this.rawValue = ko.observable("");
      this.date = ko.observable(
        IntlConverterUtils.dateToLocalIso(new Date(2024, 0, 1))
      );
      this.button2Text = "Button 2";
      this.clickedButton = ko.observable("(None clicked yet)");
      const initialData = [
        {
          id: 'error1',
          severity: 'error',
          summary: 'Error message summary',
          detail: 'Error message detail.'
        }];
        this.messages = new MutableArrayDataProvider(initialData, {
          keyAttributes: 'id'
        });
        window.setInterval(() => {
          this.step((this.step() + 1) % 200);
        }, 30);
  }
  public buttonClick = (event: Event) => {
    this.clickedButton((event.currentTarget as HTMLElement).id);
    return true;
  };
  
}

export = DashboardViewModel;
