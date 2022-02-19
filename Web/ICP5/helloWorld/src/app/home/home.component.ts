import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  days: any;
  hours: any;
  mins: any;
  secs: any;
  showTimer: any = true;
  expired: any;
  list: any[] = [
    {
      date: '2/19/2022 6:00:00',
      days: 0,
      hours: 19,
      mins: 0,
      progress: 'In Progress',
      secs: 21,
      showTimer: true,
      taskDesc: 'First task created in To-do list.',
      taskName: 'Task - 1',
      createTime: '2/16/2022 6:00:00',
      edit: false,
    },
    {
      date: '2/21/2022 8:40:00',
      days: 2,
      hours: 17,
      mins: 40,
      progress: 'In Progress',
      secs: 12,
      showTimer: true,
      taskDesc: 'This is our second task',
      taskName: 'Task - 2',
      createTime: '2/17/2022 8:04:00',
      edit: false,
    },
  ];
  newDt = new Date().getTime();
  newTim: any;
  newDate: any;
  newTime: any;
  newdate: any;
  createTaskForm!: FormGroup;
  editTaskForm!: FormGroup;
  createTaskData: any;
  edit = false;
  editTaskFormData: any;
  editTaskData: any;
  count = 0;
  Pcount = 0;
  Ecount = 0;

  constructor(
    private fb: FormBuilder,
    private fb1: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  //to count the timer fopr every second. Math.floor() function is used.

  x = setInterval(() => {
    this.list.forEach((element) => {
      let EndDt = new Date(element.date).getTime();
      let today = new Date().getTime();
      let percent = new Date(element.createTime).getTime();
      let timeLeft = EndDt - today;
      element.timeleft = Math.floor(
        ((today - percent) / (EndDt - percent)) * 100
      );
      element.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      element.hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      element.mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      element.secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
      if (timeLeft <= 0) {
        element.showTimer = false;
        element.progress = 'Expired';
        element.timeleft = 100;
      }
    });
  }, 1000);

  ngOnInit(): void {
    this.intializeForm();
    this.count = 0;
    this.Pcount = 0;
    this.Ecount = 0;
    this.count = this.list.length;
    this.list.forEach((element) => {
      if (element.progress != 'Expired') {
        this.Pcount++;
      } else {
        this.Ecount++;
      }
    });
  }

  //function to create edit form for editing the task.

  openDialog(event: any): void {
    this.list[event].edit = true;
    this.editTaskForm.controls['taskName'].setValue(this.list[event].taskName);
    this.editTaskForm.controls['taskDesc'].setValue(this.list[event].taskDesc);
    console.log('date up', this.list[event].date.split(' ')[0]);
    this.editTaskForm.controls['dateControl'].setValue(
      this.list[event].date.split(' ')[0]
    );
    let newtime = this.list[event].date.split(' ')[1];
    let newtime1;
    if (this.list[event].date.indexOf('AM') != -1) {
      newtime1 =
        Math.floor(parseInt(newtime.split(':')[0]) - 12) +
        ':' +
        newtime.split(':')[1] +
        ' PM';
    } else {
      newtime1 = newtime.split(':')[0] + ':' + newtime.split(':')[1] + ' AM';
    }
    this.editTaskForm.controls['timeControl'].setValue(newtime1.toString());
  }

  //Form needs to be initialised.

  intializeForm() {
    this.createTaskForm = this.fb.group({
      taskName: [null, Validators.required],
      taskDesc: [null, Validators.required],
      dateControl: [null, Validators.required],
      timeControl: [null, Validators.required],
    });

    this.editTaskForm = this.fb1.group({
      taskName: [null, Validators.required],
      taskDesc: [null, Validators.required],
      dateControl: [null, Validators.required],
      timeControl: [null, Validators.required],
    });
  }

  // Form for creating the task.

  createTask() {
    if (this.formValid()) {
      this.createTaskData = this.createTaskForm.getRawValue();
      console.log('task created', this.createTaskData);
      let new_date = '';
      if (
        this.createTaskForm.controls['timeControl'].value != null &&
        this.createTaskForm.controls['timeControl'].value.indexOf('AM') != -1
      ) {
        new_date =
          this.createTaskForm.controls['dateControl'].value
            ?.toLocaleString()
            .split(',')[0] +
          ' ' +
          this.createTaskForm.controls['timeControl'].value.split(' ')[0] +
          ':00';
      } else if (this.createTaskForm.controls['timeControl'].value != null) {
        new_date =
          this.createTaskForm.controls['dateControl'].value
            ?.toLocaleString()
            .split(',')[0] +
          ' ' +
          Math.floor(
            parseInt(
              this.createTaskForm.controls['timeControl'].value.split(':')[0]
            ) + 12
          ) +
          ':' +
          this.createTaskForm.controls['timeControl'].value
            .split(':')[1]
            .split(' ')[0] +
          ':00';
      }
      let state = '';
      let EndDt = new Date(new_date).getTime();
      let today = new Date().getTime();
      let timeLeft = EndDt - today;
      if (timeLeft <= 0) {
        state = 'Expired';
        this.expired = 'This event has been expired.';
      } else {
        state = 'In Progress';
      }
      let taskObj = {
        taskName: this.createTaskData.taskName,
        taskDesc: this.createTaskData.taskDesc,
        date: new_date,
        progress: state,
        showTimer: true,
        days: '',
        hours: '',
        mins: '',
        secs: '',
        createTime: today,
      };
      this.list.push(taskObj); // Adding into the list.
      this.clearForm(); 
      this._snackBar.open('New task has been created', 'Ok!');
      this.edit = false;
      this.count = 0;
      this.Pcount = 0;
      this.Ecount = 0;
      this.count = this.list.length;
      this.list.forEach((element) => {
        if (element.progress != 'Expired') {
          this.Pcount++;
        } else {
          this.Ecount++;
        }
      });
    }
  }

  //To validate the create form for all the values.
  formValid() {
    if (
      this.createTaskForm.controls['dateControl'].value == null ||
      this.createTaskForm.controls['timeControl'].value == null ||
      this.createTaskForm.controls['taskName'].value == null ||
      this.createTaskForm.controls['taskDesc'].value == null
    ) {
      return false;
    } else {
      return true;
    }
  }

  //To validate the edit form for all the values.
  formEditValid() {
    if (
      this.editTaskForm.controls['dateControl'].value == null ||
      this.editTaskForm.controls['timeControl'].value == null ||
      this.editTaskForm.controls['taskName'].value == null ||
      this.editTaskForm.controls['taskDesc'].value == null
    ) {
      return false;
    } else {
      return true;
    }
  }

  //TO delete the task from the list 
  deleteTask(event: any) {
    console.log('delete val ', this.list[event]);
    this.list.splice(event, 1);
    this._snackBar.open(
      'The selected task has been deleted succesfully.',
      'Ok!'
    );
    this.count = 0;
    this.Pcount = 0;
    this.Ecount = 0;
    this.count = this.list.length;
    this.list.forEach((element) => {
      if (element.progress != 'Expired') {
        this.Pcount++;
      } else {
        this.Ecount++;
      }
    });
  }

  //To manually expire the task.

  expireTask(event: any) {
    console.log('expired val ', this.list[event]);
    let expiredTask = this.list[event];
    expiredTask.date = new Date().toLocaleString().replace(',', '');
    expiredTask.days = 0;
    expiredTask.hours = 0;
    expiredTask.mins = 0;
    expiredTask.progress = 'Expired';
    expiredTask.secs = 0;
    expiredTask.showTimer = false;
    this.list[event] = expiredTask;
    this.count = 0;
    this.Pcount = 0;
    this.Ecount = 0;
    this.count = this.list.length;
    this.list.forEach((element) => {
      if (element.progress != 'Expired') {
        this.Pcount++;
      } else {
        this.Ecount++;
      }
    });
  }

  // clearing the form after creating the task.
  clearForm() {
    this.createTaskForm.controls['taskName'].setValue('');
    this.createTaskForm.controls['taskDesc'].setValue('');
    //this.createTaskForm.controls['timeControl'].setValue("");
    //this.createTaskForm.controls['dateControl'].setValue("");
  }

  //this function updates task data in the list .
  updateTask(event: any) {
    let newDT = '';
    if (this.formEditValid()) {
      this.editTaskData = this.editTaskForm.getRawValue();
      console.log('task update', this.editTaskData);
      if (
        this.editTaskForm.controls['timeControl'].value != null &&
        this.editTaskForm.controls['timeControl'].value.indexOf('AM') != -1
      ) {
        newDT =
          this.editTaskForm.controls['dateControl'].value
            ?.toLocaleString()
            .split(',')[0] +
          ' ' +
          this.editTaskForm.controls['timeControl'].value.split(' ')[0] +
          ':00';
      } else if (this.editTaskForm.controls['timeControl'].value != null) {
        newDT =
          this.editTaskForm.controls['dateControl'].value
            ?.toLocaleString()
            .split(',')[0] +
          ' ' +
          Math.floor(
            parseInt(
              this.editTaskForm.controls['timeControl'].value.split(':')[0]
            ) + 12
          ) +
          ':' +
          this.editTaskForm.controls['timeControl'].value
            .split(':')[1]
            .split(' ')[0] +
          ':00';
      }
      let state = '';
      let EndDt = new Date(newDT).getTime();
      let today = new Date().getTime();
      let timeLeft = EndDt - today;
      if (timeLeft <= 0) {
        state = 'Expired';
        this.expired = 'This event has been expired.';
      } else {
        state = 'In Progress';
      }
      let taskObj = {
        taskName: this.editTaskData.taskName,
        taskDesc: this.editTaskData.taskDesc,
        date: newDT,
        progress: state,
        showTimer: true,
        days: '',
        hours: '',
        mins: '',
        secs: '',
        createTime: this.list[event].createTime,
        edit: false,
      };
      this.list[event] = taskObj;
      this.editTaskForm.controls['taskName'].setValue('');
      this.editTaskForm.controls['taskDesc'].setValue('');
      this._snackBar.open('Task has been updated', 'Ok!');
    }
  }
}
