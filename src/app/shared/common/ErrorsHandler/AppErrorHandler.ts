import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
	handleError(error){
		alert("Oups ! It's seems something gone wrong");
		console.log(error);
	}
}