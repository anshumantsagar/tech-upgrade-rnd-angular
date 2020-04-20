import {Component, ViewChild} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import {IDayCalendarConfig, DatePickerComponent } from 'ng2-date-picker';  



@Component({
    selector:'app-datetime',
    template:`
    <pre>{{ filterForm.value | json }}</pre>
    
    <div [formGroup]="filterForm">
        From: <input type="text" 
               #dateFromDp="dpDayPicker"
               [dpDayPicker]="dayPickerConfig"
               [theme]="'dp-material'"
               formControlName="dateFrom"
               [mode]="'daytime'"
               (onChange)="myCheckFunction($event);" />
    
        To: <input type="text" 
               #dateToDp="dpDayPicker"
               [dpDayPicker]="dayPickerConfig"
               [displayDate]="displayDate"
               [theme]="'dp-material'"
               formControlName="dateTo"
               [mode]="'daytime'"
               (onChange)="date = $event" />
    </div>
    {{date}}
    `,
    styles:[`
    p {
        font-family: Lato;
      }
    `]
})
export class DatetimeComponent {
    date:string;

    @ViewChild("dateFromDp") public dateFromDp: DatePickerComponent; 
    @ViewChild("dateToDp") public dateToDp: DatePickerComponent; 

    public filterForm: FormGroup;
    public displayDate;


    public dayPickerConfig = <IDayCalendarConfig>{
    locale: "de",
    format: "DD.MM.YYYY",
    monthFormat: "MMMM, YYYY",
    firstDayOfWeek: "mo"
    };

    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    
    public ngOnInit(): void {
        // When DateFrom changes we set the min selectable value for DateTo
        this.filterForm.get("dateFrom").valueChanges.subscribe(value => {
            console.log(value)
        // this.dateToDp.displayDate = value; // DateTo
        this.dayPickerConfig = {
            min: value,
            ...this.dayPickerConfig
        }
        });
    }
    
    private createForm(): void {
        this.filterForm = this.fb.group({
            dateFrom: new FormControl(),
            dateTo: new FormControl(),
        });
    }    

    myCheckFunction(event:any){
        this.date = String(event)
        console.log(event)
    }
}