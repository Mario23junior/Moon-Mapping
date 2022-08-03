import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Moon } from '../models/moon';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-moons-details',
  templateUrl: './moons-details.component.html',
  styleUrls: ['./moons-details.component.css']
})
export class MoonsDetailsComponent implements OnInit {

  public dialogRef: MatDialogRef<MoonsDetailsComponent>
  public moons: Moon
  public matDialog: MatDialog

  constructor(@Inject(MAT_DIALOG_DATA) moons: Moon, dialogRef: MatDialogRef<MoonsDetailsComponent>,matDialog: MatDialog) {
    this.dialogRef = dialogRef
    this.moons = moons
    this.matDialog = matDialog
  }

  ngOnInit(): void {
  }

  public fechar() {
    this.dialogRef.close()
  }
}
