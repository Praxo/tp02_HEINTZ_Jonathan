import { Component, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(value: any, ...args: any): any {
    return "(+33)" + value.substr(1);
  }
}