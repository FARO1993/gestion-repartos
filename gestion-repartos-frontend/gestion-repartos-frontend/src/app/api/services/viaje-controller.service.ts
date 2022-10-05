/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Viaje } from '../models/viaje';
import { ViajeDto } from '../models/viaje-dto';

@Injectable({
  providedIn: 'root',
})
export class ViajeControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation editViaje
   */
  static readonly EditViajePath = '/api/v1/editViaje';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editViaje()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editViaje$Response(params: {
    context?: HttpContext
    body: ViajeDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ViajeControllerService.EditViajePath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `editViaje$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  editViaje(params: {
    context?: HttpContext
    body: ViajeDto
  }
): Observable<void> {

    return this.editViaje$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createViaje
   */
  static readonly CreateViajePath = '/api/v1/createViaje';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createViaje()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createViaje$Response(params: {
    context?: HttpContext
    body: Viaje
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ViajeControllerService.CreateViajePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createViaje$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createViaje(params: {
    context?: HttpContext
    body: Viaje
  }
): Observable<void> {

    return this.createViaje$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findViajeById
   */
  static readonly FindViajeByIdPath = '/api/v1/findViajeById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findViajeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findViajeById$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Viaje>> {

    const rb = new RequestBuilder(this.rootUrl, ViajeControllerService.FindViajeByIdPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Viaje>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findViajeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findViajeById(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Viaje> {

    return this.findViajeById$Response(params).pipe(
      map((r: StrictHttpResponse<Viaje>) => r.body as Viaje)
    );
  }

  /**
   * Path part for operation findAllViajes
   */
  static readonly FindAllViajesPath = '/api/v1/findAllViajes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllViajes()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllViajes$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ViajeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ViajeControllerService.FindAllViajesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ViajeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findAllViajes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllViajes(params?: {
    context?: HttpContext
  }
): Observable<Array<ViajeDto>> {

    return this.findAllViajes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ViajeDto>>) => r.body as Array<ViajeDto>)
    );
  }

  /**
   * Path part for operation deleteVieja
   */
  static readonly DeleteViejaPath = '/api/v1/deleteVieja';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteVieja()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVieja$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ViajeControllerService.DeleteViejaPath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteVieja$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteVieja(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.deleteVieja$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
