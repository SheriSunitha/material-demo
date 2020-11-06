import { NgModule } from '@angular/core';
import {  
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule, 
  MatCardModule, 
  MatCheckboxModule, 
  MatDatepickerModule, 
  MatDialogModule, 
  MatDividerModule, 
  MatExpansionModule, 
  MatFormFieldModule, 
  MatGridListModule, 
  MatIconModule, 
  MatInputModule, 
  MatListModule, 
  MatMenuModule, 
  MatNativeDateModule, 
  MatPaginator, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatRadioModule, 
  MatSelectModule, 
  MatSidenavModule, 
  MatSnackBarModule, 
  MatSortModule, 
  MatStepperModule, 
  MatTableModule, 
  MatTabsModule, 
  MatToolbarModule,
  MatTooltipModule
   } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';

const material=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [material],
    exports:[material]
})
export class MaterialModule { }
