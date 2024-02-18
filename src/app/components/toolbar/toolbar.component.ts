import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PeopleTableComponent } from '../people-table';
@Component({
  standalone:true,
  selector: 'app-toolbar',
  imports:[CommonModule,MatToolbarModule,MatIconModule,MatDialogModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  openDialog(enterAnimationDuration:string,exitAnimationDuration:string):void{
    this.dialog.open(PeopleTableComponent ,{
      // width:'250px',
      enterAnimationDuration,
      exitAnimationDuration
    })
  }

  ngOnInit(): void {
  }

}
