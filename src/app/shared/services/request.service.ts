import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

import { NotFoundError } from "./../common/ErrorsHandler/NotFoundError";
import { AppError } from "./../common/ErrorsHandler/AppError";
import { BadRequestError } from "./../common/ErrorsHandler/BadRequestError";
import { ServerInternalError } from "./../common/ErrorsHandler/ServerInternalError";

import "rxjs/add/operator/catch";

@Injectable()
export class RequestService {

  constructor(private http:Http) { }

  post(url, data){
  	return this.http.post(url, data).catch(this.handleError);
  }
  get(url){
    alert(url);
    return this.http.get(url).catch(this.handleError);
  }
  update(url, newData){
    return this.http.put(url, newData).catch(this.handleError);
  }
  delete(url, newData){
    return this.http.delete(url, newData).catch(this.handleError);
  }

  handleError(error : Response){
    alert(error);
  	if (error.status == 404) 
  		return Observable.throw(new NotFoundError(error));
  	if (error.status == 400) 
      return Observable.throw(new BadRequestError(error));
    if (error.status == 500) 
      return Observable.throw(new ServerInternalError(error));
    return Observable.throw(new AppError(error));
  }

}
