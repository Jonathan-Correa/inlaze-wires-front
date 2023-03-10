import { Component, OnInit, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { SelectOption } from '../../interfaces/select-option';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers: [],
})
export class InputFormComponent implements OnInit, ControlValueAccessor {
  @Input() type = 'text';
  @Input() label: string;
  @Input() placeholder: string;
  @Input() customClass = '';
  @Input() autocomplete = false;
  @Input() id: string;
  @Input() name = '';
  @Input() width = '80%';
  @Input() isDisabled = false;
  @Input() autofocus = false;
  @Input() required = false;
  @Input() minlength: number;
  @Input() options: SelectOption[] = [];

  @Input() value: string;
  pattern: RegExp;
  onChange = (_: any) => {};
  onTouch = () => {};

  ngOnInit(): void {}

  constructor(@Self() @Optional() public control: NgControl) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  public get invalid(): boolean {
    if (!this.control) {
      return false;
    }

    if (this.type !== 'email') {
      return this.control.invalid;
    }

    const validate: RegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!validate.test(this.value)) {
      if (!this.control.errors) {
        Object.defineProperty(this.control, 'errors', {
          value: {
            invalid: true,
          },
        });
      }

      Object.defineProperty(this.control, 'invalid', {
        value: true,
        writable: true,
      });
    } else {
      Object.assign(this.control, { invalid: false });
    }

    return this.control.invalid;
  }

  public get showError(): boolean {
    if (!this.control) {
      return false;
    }

    const { dirty, touched } = this.control;
    return this.invalid ? dirty || touched : false;
  }

  public get errors(): string[] {
    if (!this.control) {
      return [];
    }

    const { errors } = this.control;

    return Object.keys(errors).map((key: string) => {
      if (key === 'required') {
        return 'GLOBAL.ERRORS.REQUIRED';
      }

      return `FORM.${this.name.toUpperCase()}.ERRORS.${key.toUpperCase()}`;
    });
  }

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
