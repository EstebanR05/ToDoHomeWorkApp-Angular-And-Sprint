import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  id: any;
  form!: FormGroup;

  @Input() modal: any;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(
    private _form: FormBuilder,
    private _UserService: UserService
  ) { }

  ngOnInit(): void {
    this.form = this._form.group({
      nombre: ['', [Validators.required]],
      info:['', [Validators.required]],
      f_inicial:['', [Validators.required]],
      f_final:['', [Validators.required]],
      id: [this._UserService.valorID]
    });
  }

  submit() {
    this._UserService.AgregarTarea(this.form.value).subscribe(() => {
       this.closeModal.emit();
       window.location.reload();
    })
  }

}
