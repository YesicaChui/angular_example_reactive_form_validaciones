import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {invalidCodigoValidator} from '../../utils/custom-validators'
@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.scss']
})
export class RegistroAlumnosComponent {
  userForm:FormGroup
  constructor(private formBuilder:FormBuilder){
    this.userForm=this.formBuilder.group({
      codigo:['',[Validators.required, invalidCodigoValidator]],
      nombreApellido:['',[Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Za-z]+$/)]],
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
  get codigoControl(){
    return this.userForm.controls['codigo']
  }

  get nombreApellidoControl(){
    return this.userForm.controls['nombreApellido']
  }

  get emailControIsInvalid(){
    return this.emailControl.invalid && this.emailControl.touched
  }

  get codigoControIsInvalid(){
    return this.userForm.controls['codigo'].invalid && this.userForm.controls['codigo'].touched
  }

  get nombreApellidoControIsInvalid(){
    return this.userForm.controls['nombreApellido'].invalid && this.userForm.controls['nombreApellido'].touched
  }
}
