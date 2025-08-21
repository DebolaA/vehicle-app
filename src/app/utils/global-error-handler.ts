import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}
  handleError(error: Error) {
    // your custom error handling logic
    //const toastr = this.injector.get(ToastrService)
    console.log(error);
    //toastr.error('An unexpected error has occured.')
  }
}
