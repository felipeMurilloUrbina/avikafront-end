import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule,
         SharedModule,
         DialogModule, DataTableModule, TabMenuModule, AccordionModule, TabViewModule, GrowlModule, Dialog, PaginatorModule, InputTextModule, CodeHighlighterModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  export const ModulesPrimeng: any[] = [
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    CodeHighlighterModule,
    ReactiveFormsModule,
    ButtonModule,
    MultiSelectModule,
    CommonModule,
    DialogModule,
    TableModule,
    SharedModule,
    DataTableModule,
    HttpClientModule,
    PaginatorModule
];
  