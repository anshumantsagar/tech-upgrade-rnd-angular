import { Component,Input,ViewChild } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  template: `
  <ckeditor
    [(ngModel)]="ckeditorContent"
    [config]="ckeConfig"
    [readonly]="false"
    (change)="onChange($event)"
    (editorChange)="onEditorChange($event)" 
    (ready)="onReady($event)"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    (contentDom)="onContentDom($event)"
    (fileUploadRequest)="onFileUploadRequest($event)"
    (fileUploadResponse)="onFileUploadResponse($event)"
    (paste)="onPaste($event)"
    (drop)="onDrop($event)"
    debounce="500">
  </ckeditor>

  <div [innerHTML]="ckeditorContent"></div>
  <div [innerHTML]="throughFunctiom"></div>

  `,
})
export class CkeditorComponent  { 
    ckeditorContent:string
    throughFunctiom:string
    ckeConfig = {
        allowedContent: false,
        forcePasteAsPlainText: true,
        font_names: 'Arial;Times New Roman;Verdana',
        toolbarGroups: [
          { name: 'document', groups: ['mode', 'document', 'doctools'] },
          { name: 'clipboard', groups: ['clipboard', 'undo'] },
          { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
          { name: 'forms', groups: ['forms'] },
          '/',
          { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
          { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
          { name: 'links', groups: ['links'] },
          { name: 'insert', groups: ['insert'] },
          '/',
          { name: 'styles', groups: ['styles'] },
          { name: 'colors', groups: ['colors'] },
          { name: 'tools', groups: ['tools'] },
          { name: 'others', groups: ['others'] },
          { name: 'about', groups: ['about'] }
        ],
        removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
    };
  
    constructor() {}

    onChange(event:any){
        console.log(event)
        this.throughFunctiom = event
    }
    onEditorChange($event){}
    onReady($event){}
    onFocus($event){}
    onBlur($event){}
    onContentDom($event){}
    onFileUploadRequest($event){}
    onFileUploadResponse($event){}
    onPaste($event){}
    onDrop($event){}    
}