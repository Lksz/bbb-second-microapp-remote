import { Component, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'microfrontend-example-nx-welcome',
  template: `
    <div style="border: 5px solid gold; border-radius: 5px; padding: 20px;">
      <h2>Microfrontend ORDERS app</h2>
      <p>This app is developed independently.</p>
      <p>It implements logi related to manging system users</p>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
