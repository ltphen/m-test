import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { catchError, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { NotFoundError } from "./../common/ErrorsHandler/NotFoundError";
import { AppError } from "./../common/ErrorsHandler/AppError";
import { BadRequestError } from "./../common/ErrorsHandler/BadRequestError";
import { ServerInternalError } from "./../common/ErrorsHandler/ServerInternalError";
import { UnauthorizedError } from "./../common/ErrorsHandler/UnauthorizedError";

@Injectable()

 /********************************* Global Request sender ***************************************************************************/
export class RequestService {

  // number of retry for a single request

  private retry : number = 3;

  constructor(private httpc:HttpClient) { }

   /********************************* Post request ***************************************************************************/
  post(url, data){
  	return this.httpc.post(url, data).pipe(retry(this.retry), catchError(this.handleError));
  }

 /********************************* Get request ***************************************************************************/
  get(url){
    alert(url);
    return this.httpc.get(url).pipe(retry(this.retry), catchError(this.handleError));
  }

   /********************************* Update request ***************************************************************************/
  update(url, newData){
    return this.httpc.put(url, newData).pipe(retry(this.retry), catchError(this.handleError));
  }

   /********************************* Delete request ***************************************************************************/
  delete(url, newData){
    return this.httpc.delete(url, newData).pipe(retry(this.retry), catchError(this.handleError));
  }

 /********************************* Error handler method ***************************************************************************/
  private handleError(error : Response){
    // alert("Error" + error);
  	if (error.status == 404) 
  		return Observable.throw(new NotFoundError(error));
  	if (error.status == 400) 
      return Observable.throw(new BadRequestError(error));
    if (error.status == 401) 
      return Observable.throw(new UnauthorizedError(error));
    if (error.status == 500) 
      return Observable.throw(new ServerInternalError(error));
    return Observable.throw(new AppError(error));
  }

}
