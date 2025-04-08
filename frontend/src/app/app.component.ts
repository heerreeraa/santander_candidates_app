import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule, // 👈 Añade esto
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form: FormGroup;
  candidates: any[] = [];
  constructor(private readonly fb: FormBuilder, private readonly http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ file });
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('name', this.form.value.name!);
    formData.append('surname', this.form.value.surname!);
    formData.append('file', this.form.value.file!);

    this.http.post<any>('http://localhost:3000/candidates', formData)
      .subscribe(res => {
        this.candidates.push(res);
      });
  }
}
