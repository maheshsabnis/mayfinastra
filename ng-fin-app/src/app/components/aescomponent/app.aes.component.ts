import { Component, OnInit } from '@angular/core';
// importing the Crypto Library
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-aes-component',
  templateUrl: './app.aes.view.html'
})

export class AESComponent implements OnInit {
  message:string;
  encryptionpassword:string;
  encryptedString:string;
  originalMessage:string;
  constructor() {
    this.message = '';
    this.encryptionpassword = '';
    this.encryptedString = '';
    this.originalMessage = '';
  }

  ngOnInit() { }

  encryptCredentials():void{
     this.encryptedString = CryptoJS.AES.encrypt(
       this.message.trim(),this.encryptionpassword.trim()
     ).toString();
  }
  decryptCredentials():void{
    this.originalMessage = CryptoJS.AES.decrypt(
      this.encryptedString.trim(),this.encryptionpassword.trim()
    ).toString(CryptoJS.enc.Utf8); // use the encoding
 }
}
