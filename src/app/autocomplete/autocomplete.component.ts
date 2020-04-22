import { Component } from '@angular/core';

@Component({
    selector: 'autocomplete',
    template: `
    <div class="ng-autocomplete">
  <ng-autocomplete
    [data]="countries"
    [searchKeyword]="keyword"
    placeHolder="Enter the Country Name"
    (selected)='selectEvent($event)'
    (inputChanged)='onChangeSearch($event)'
    (inputFocused)='onFocused($event)'
    historyIdentifier="countries"
    [itemTemplate]="itemTemplate"
    [notFoundTemplate]="notFoundTemplate">
  </ng-autocomplete>

  <ng-template #itemTemplate let-item>
    <a [innerHTML]="item.name"></a>
  </ng-template>

  <ng-template #notFoundTemplate let-notFound>
    <div [innerHTML]="notFound"></div>
  </ng-template>
</div>
    `
})

export class AutocompleteComponent  {
    constructor() { }
    keyword = 'name';
    public countries = [
      {
        id: 1,
        name: 'Albania',
      },
      {
        id: 2,
        name: 'Belgium',
      },
      {
        id: 3,
        name: 'Denmark',
      },
      {
        id: 4,
        name: 'Montenegro',
      },
      {
        id: 5,
        name: 'Turkey',
      },
      {
        id: 6,
        name: 'Ukraine',
      },
      {
        id: 7,
        name: 'Macedonia',
      },
      {
        id: 8,
        name: 'Slovenia',
      },
      {
        id: 9,
        name: 'Georgia',
      },
      {
        id: 10,
        name: 'India',
      },
      {
        id: 11,
        name: 'Russia',
      },
      {
        id: 12,
        name: 'Switzerland',
      }
    ];
      selectEvent(item) {
      // do something with selected item
    }
  
    onChangeSearch(search: string) {
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property.
    }
  
    onFocused(e) {
      // do something
    }

}