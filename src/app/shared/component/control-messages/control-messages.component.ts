import { Component, Input } from '@angular/core';
import { UntypedFormControl, AbstractControl } from '@angular/forms';
import { ValidationService } from '../../service/validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent {
  @Input() control!: UntypedFormControl | AbstractControl;
  @Input() labelName?: string;

  get errorMessage(): string | undefined {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ValidationService.getValidationErrorMessage(
          propertyName,
          this.control.errors[propertyName],
          this.labelName
        );
      }
    }

    return undefined;
  }
}
