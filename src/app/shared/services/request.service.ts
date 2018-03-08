import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { NotFoundError } from "./../common/ErrorsHandler/NotFoundError";
import { AppError } from "./../common/ErrorsHandler/AppError";
import { BadRequestError } from "./../common/ErrorsHandler/BadRequestError";
import { ServerInternalError } from "./../common/ErrorsHandler/ServerInternalError";

import "rxjs/add/operator/catch";

@Injectable()

 /********************************* Global Request sender ***************************************************************************/
export class RequestService {

  constructor(private http:Http) { }

   /********************************* Post request ***************************************************************************/
  post(url, data){
  	return this.http.post(url, data).catch(this.handleError);
  }

 /********************************* Get request ***************************************************************************/
  get(url){
    alert(url);
    return this.http.get(url).catch(this.handleError);
  }

   /********************************* Update request ***************************************************************************/
  update(url, newData){
    return this.http.put(url, newData).catch(this.handleError);
  }

   /********************************* Delete request ***************************************************************************/
  delete(url, newData){
    return this.http.delete(url, newData).catch(this.handleError);
  }

 /********************************* Error handler method ***************************************************************************/
  handleError(error : Response){
    alert("Error" + error);
  	if (error.status == 404) 
  		return Observable.throw(new NotFoundError(error));
  	if (error.status == 400) 
      return Observable.throw(new BadRequestError(error));
    if (error.status == 500) 
      return Observable.throw(new ServerInternalError(error));
    return Observable.throw(new AppError(error));
  }

}
