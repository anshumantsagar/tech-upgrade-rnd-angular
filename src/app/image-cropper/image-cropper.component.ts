import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import Cropper from "cropperjs";

@Component({
  selector: 'image-cropper',
  template: `
    <div class="img-container">
        <img #image [src]="imageSource" crossorigin>
    </div>
    <img [src]="imageDestination" class="img-preview">

  `,
  styles:[
      `
      .img-container {
        width: 640px;
        height: 480px;
        float: left;
    }
    
    .img-preview {
        width: 200px;
        height: 200px;
        float: left;
        margin-left: 10px;
    }
      `
  ]
})
export class ImagecropperComponent  { 
    @ViewChild("image", { static: false })
    public imageElement: ElementRef;

    @Input("src")
    public imageSource: string;

    public imageDestination: string;
    private cropper: Cropper;

    public constructor() {
        this.imageDestination = "";
    }

    public ngAfterViewInit() {
        this.cropper = new Cropper(this.imageElement.nativeElement, {
            zoomable: false,
            scalable: false,
            aspectRatio: 1,
            crop: () => {
                const canvas = this.cropper.getCroppedCanvas();
                this.imageDestination = canvas.toDataURL("image/png");
            }
        });
    }

    public ngOnInit() { }



}
