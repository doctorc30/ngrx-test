import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'list',
    template: `
    <ul>
     <li *ngFor="let item of items$">{{item.name}}</li>
    </ul>
    `
})
export class ListComponent{
    @Input() items$;
}