import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Moon } from '../models/moon';

@Component({
  selector: 'app-moons-details',
  templateUrl: './moons-details.component.html',
  styleUrls: ['./moons-details.component.css']
})
export class MoonsDetailsComponent implements OnInit {

  public dialogRef: MatDialogRef<MoonsDetailsComponent>
  public moons: Moon

  constructor(@Inject(MAT_DIALOG_DATA) moons: Moon , dialogRef: MatDialogRef<MoonsDetailsComponent>) {
      this.dialogRef = dialogRef
      this.moons = moons
   }

  ngOnInit(): void {
  }

  public fechar(){
     this.dialogRef.close
  }
}
