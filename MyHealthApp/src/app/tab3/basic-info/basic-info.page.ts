import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage implements OnInit {
  pageForm: FormGroup;
  constructor(
    private fb: FormBuilder) {
  }

  ngOnInit() {
   this.pageForm = this.fb.group( {
    pageInfo: this.fb.array([this.pageInfo( )])
   })
  }

  pageInfo(){
    return this.fb.group({
      gender:[''],
      height:[''],
      weight:[''],
      bloodpressure:[''],
      allergies:[''],
      notes:[''],

    });
  }

  getPageInfo(): FormArray{
    return this.pageForm.get('pageInfo') as FormArray;
  }


  addEntry() {
    this.getPageInfo().push(this.pageInfo());
  }

  onSubmit(){
    console.log("form submitted")
  }

}
