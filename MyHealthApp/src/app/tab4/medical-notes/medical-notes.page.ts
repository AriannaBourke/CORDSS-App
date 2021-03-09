import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-medical-notes',
  templateUrl: './medical-notes.page.html',
  styleUrls: ['./medical-notes.page.scss'],
})
export class MedicalNotesPage implements OnInit {
  studentForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
   this.studentForm = this.fb.group( {
    studentInfo: this.fb.array([this.studentInfo( )])



   })
  }

  studentInfo(){
    return this.fb.group({
      testtype:[''],
      picture:[''],
      file:[''],
      notes:['']

    });
  }

  getStudentInfo(): FormArray{
    return this.studentForm.get('studentInfo') as FormArray;
  }


  addStudent() {
    this.getStudentInfo().push(this.studentInfo());
  }

  removeStudent(index) {
    this.getStudentInfo().removeAt(index);
  }

}
