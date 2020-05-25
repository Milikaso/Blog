import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogserviceService } from '../blogservice.service';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent implements OnInit {

  formulario: FormGroup

  constructor(private blogService: BlogserviceService) {

    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required]),
      texto: new FormControl('', [
        Validators.required]),
      autor: new FormControl('', [
        Validators.required]),
      imagen: new FormControl('', [
        Validators.required]),
      fecha: new FormControl('', [
        Validators.required]),
      categoria: new FormControl('', [
        Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formulario) {
    this.blogService.agregarPost(formulario);


  }
  onClick() {

  }
}
