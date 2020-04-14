import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'imagecrop',
    template:`
    <p>RUN CORS FREE BROWSER</p>
    <image-cropper src="https://image.freepik.com/free-vector/abstract-social-media-icons-set_1055-5053.jpg"></image-cropper>
    <p>You can download the cropped image by right CLICK and SAVE IMAGE AS</p>
    `
})

export class ShowimagecropComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}