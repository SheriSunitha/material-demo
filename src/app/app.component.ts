import { Component, ViewChild, OnInit} from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { MatSnackBar, MatDialog, MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  numbers=[];
  constructor(private snackbar:MatSnackBar, public dialog:MatDialog){
    for(let i=0;i<1000;i++){
      this.numbers.push(i);
    }
  }

  @ViewChild(MatSort, {static: true}) sort:MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator:MatPaginator;


  title = 'material-demo';
  notifications=0;
  showSpinner=false;
  opened=false;
  selectedValue:string;
  options:string[]=['Angular','React','Vue'];
  objectOptions=
        [{name:'Angular'},{name:'React'},{name:'Vue'}];
        

loadData()
{
  this.showSpinner=true;
  setTimeout(() => {
    this.showSpinner=false;
  }, 5000);  
}

log(state)
{
  console.log(state);
}

logChange(index){
 console.log(index);
}


/*Autocomplete */
myControl=new FormControl();
filteredOptions:Observable<string[]>;

ngOnInit(){
  this.filteredOptions=this.myControl.valueChanges.pipe(
    startWith(''),
    map(value=>this._filter(value))
  );
  this.dataSource.sort=this.sort;
  this.dataSource.paginator=this.paginator;
  }

  private  _filter(value:string):string[]{
    const filterValue=value.toLocaleLowerCase();
    return this.options.filter(option=>
      option.toLocaleLowerCase().includes(filterValue)
    );
  
}

displayFn(subject){
  return subject?subject.name:undefined;
}

/**Datepicker */
minDate=new Date();
maxDate=new Date(2021, 3,10)

dateFilter=date=>{
  const day=date.getDay();
  return day!=0 && day!=6;
}


/**SnackBar */
openSnackBar(message, action)
{
  let snackBarRef= this.snackbar.open(message,action, {duration:2000});

  snackBarRef.afterDismissed().subscribe(()=>{
    console.log('The snackbar was dismissed');
  });

  snackBarRef.onAction().subscribe(()=>{
    console.log('The snackbar was triggered');
  });
}

openCustomSnackBar(){
  this.snackbar.openFromComponent(CustomSnackBarComponent,{duration:2000});
}

/** */
openDialog(){
let dialogRef= this.dialog.open(DialogExampleComponent,{data:{name:'Sunitha'}});
dialogRef.afterClosed().subscribe(result=>
  {
    console.log(`Dialog result:${result}`);
  });
}



/**datatable */


displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource =  new MatTableDataSource(ELEMENT_DATA);


applyFilter(filterValue:string)
{
  this.dataSource.filter=filterValue.trim().toLowerCase();
}


}





@Component({
  selector:'custom-snackbar',
  template:`<span style='color:orange'>Custom Snackbar</span>`
})
export class CustomSnackBarComponent{

}
