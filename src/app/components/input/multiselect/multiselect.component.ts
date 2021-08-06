import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})

export class MultiselectComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() selection: string[] = [];
  @Input() name: string;
  @Input() allowMultiselect: boolean = true;
  @Input() disableCustom: boolean = false;


  constructor(private alertController: AlertController) { }

  ngOnInit() {
    /* add expanded / custom values to selection */
    this.selection.forEach(selected => {
      if (!this.options.includes(selected)) {
        this.options.push(selected);
      }
    });
  }

  addOption(value: string) {
    this.options.push(value);
  }

  async submit(values: string[]) {
    let newSelection: string[] = [];
    let addNew: boolean = false;

    // to array if single string
    if (typeof values == "string") {
      values = [values];
    }

    values.forEach(value => {
      if (value == "add") {
        addNew = true;
      } else {
        newSelection.push(value);
      }
    })

    this.selection = newSelection;
    if (addNew) {
      await this.presentAlertPrompt();
    }
  }

  async presentAlertPrompt(): Promise<any> {

    const alert = await this.alertController.create({
      header: 'Add category',
      inputs: [{ name: 'category', type: 'text', placeholder: 'Add new selection option' }],
      buttons: [{ 
          text: 'Cancel', role: 'cancel', cssClass: 'danger', handler: () => {}
        }, { 
          text: 'Ok', handler: (alertData) => {}
        }]
    });

    await alert.present();
    await alert.onDidDismiss().then((alertData) => {
      if (alertData.role != "cancel")  {
        const value = alertData.data.values.category;
        this.options.push(value);
        this.selection.push(value);
      }
    });
  }

}
