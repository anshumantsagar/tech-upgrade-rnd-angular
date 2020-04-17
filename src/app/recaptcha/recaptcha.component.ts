import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recaptcha',
    template:`
    
    <div class="recaptcha">
        <re-captcha (resolved)="resolved($event)" siteKey="6Le8IOkUAAAAANWUqcpu096U_umLdxXKrqWmCbkA"></re-captcha>
    </div>
    
    `
})

export class RecaptchaComponent implements OnInit {

    constructor() { }
    //just verfy the code with backend
    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response: String{captchaResponse}`);
    }
    ngOnInit() { }
}