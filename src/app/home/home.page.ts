import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryService } from '../shared/services/firebase/query.service';
import { ToastService } from '../shared/services/toast/toast.service';

interface ITask {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public tasks: ITask[] = [];
  public title!: FormControl;
  public description!: FormControl;

  public form!: FormGroup;

  constructor(private readonly _querySrv: QueryService, private readonly _toastSrv: ToastService) {
    this.initForm();
  }

  async ngOnInit() {
    this.tasks = await this._querySrv.getCollection<ITask[]>("tasks");
    console.log("🚀  ~ HomePage ~ ngOnInit ~ tasks:", this.tasks);
  }

  public async doSave() {
    try {
      console.log(this.form.value);
      const response = await this._querySrv.create("tasks", this.form.value);
      console.log("🚀  ~ HomePage ~ doSave ~ response:", response);
      this.form.reset();
      this._toastSrv.show("Task saved with success");
    } catch (error) {
    console.log("🚀  ~ HomePage ~ doSave ~ error:", error);
    }
  }

  private initForm() {
    this.title = new FormControl("", [Validators.required]);
    this.description = new FormControl("", [Validators.required]);

    this.form = new FormGroup({
      title: this.title,
      description: this.description
    });
  }

}
