import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-component',
  template: `
     <div class="container">
        <h2>I am the Lazy Loaded Component</h2>
        <p>
          <strong>
            {{message| uppercase}}
          </strong>
        </p>
     </div>
  `
})

export class MessageComponent implements OnInit {
  message:string;
  constructor() {
    this.message = 'I will be loaded on demand';
   }

  ngOnInit() { }
}
