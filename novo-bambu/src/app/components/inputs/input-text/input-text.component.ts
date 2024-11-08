import { Component, Input } from "@angular/core";

@Component ({
    selector: 'InputText',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss']
})

export class InputTextComponent {
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
    @Input() value: string = '';
}
