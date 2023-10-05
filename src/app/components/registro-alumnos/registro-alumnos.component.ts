import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.scss']
})
export class RegistroAlumnosComponent {
  userForm:FormGroup
  constructor(private formBuilder:FormBuilder){
    this.userForm=this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:this.formBuilder.control('')
    })
  }
  onSubmit(): void{
    if(this.userForm.invalid){
      alert('Formulario invalido')
    }else{
      console.log(this.userForm.value)
    }
  }

  get emailControl(){
    return this.userForm.controls['email']
  }

  get emailControIsInvalid(){
    return this.emailControl.invalid && this.emailControl.touched
  }
}
