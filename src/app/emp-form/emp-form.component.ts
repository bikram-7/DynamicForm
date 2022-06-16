import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css'],
})
export class EmpFormComponent implements OnInit {
  mainForm: FormGroup;
  submitted = false;
  listData: any;
  clicked = false;
  data: any;
  list: any;
  isEdit;
  p:number=1;

  collection = [];

  userObj = {
    stName: '',
    stMail: '',
    stPhone: '',
    stBranch: '',
    stCollege: '',
    stRoll: '',
    stGender: ''
  }

  constructor(private fb: FormBuilder) {
    this.list = [];
    this.data = [];
    this.listData = [];
    this.isEdit = false;
    
    this.mainForm = this.fb.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(250),]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender: ['', [Validators.required]],
      college: ['', [Validators.required]],
      roll: ['', [Validators.required]],
      branch: ['', [Validators.required]],
    });

  }

  get name() {
    return this.mainForm.get('name')
  }
  get mail() {
    return this.mainForm.get('mail')
  }
  get phone() {
    return this.mainForm.get('phone')
  }
  get gender() {
    return this.mainForm.get('gender')
  }
  get college() {
    return this.mainForm.get('college')
  }
  get roll() {
    return this.mainForm.get('roll')
  }
  get branch() {
    return this.mainForm.get('branch')
  }

  // @input student : String = [];
  ngOnInit(): void {
    this.getStudents();
  }

  get f() {
    return this.mainForm.controls;
  }

  addStudent() {
    console.log('clicked');
    console.log(this.mainForm.value);
    if (this.mainForm.invalid) {
      return;
    }
    this.listData.unshift(this.mainForm.value);
    window.alert('Student added successfully');
    this.mainForm.reset();
    localStorage.setItem('studentData', JSON.stringify(this.listData));
  }

  updateStudent(){
    this.listData.splice(this.index,1,this.mainForm.value)
    this.mainForm.reset();
    localStorage.setItem('studentData', JSON.stringify(this.listData));
    this.isEdit = false
    window.alert("Update Successful")
  }

  getStudents() {
    this.data = localStorage.getItem('studentData');
    if (this.listData == []) {
      this.listData = [];
    } else {
      this.listData = JSON.parse(this.data);
    }
    
  }
  reset() {
    this.mainForm.reset();
  }

  index = 0;
  editIndex = null;
  editStudent(i:number) {
    this.isEdit = true
    this.index = i
    console.log(this.index)
    let newArry = this.listData[this.index]
    this.mainForm.setValue({
      name:newArry.name,
      mail:newArry.mail,
      phone:newArry.phone,
      gender:newArry.gender,
      roll:newArry.roll,
      college:newArry.college,
      branch:newArry.branch,
    })
  }



  removeItem(element: any) {
    var ans = confirm("Are you sure ?");
    if (ans) {
      this.listData.forEach((value: any, index: any) => {
        if (value == element) {
          this.listData.splice(index, 1);
          localStorage.setItem('studentData', JSON.stringify(this.listData));
        }
      });
    }
  }


}


