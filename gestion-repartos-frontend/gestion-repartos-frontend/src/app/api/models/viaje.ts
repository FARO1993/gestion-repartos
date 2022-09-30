/* tslint:disable */
/* eslint-disable */
import { Reparto } from './reparto';
export interface Viaje {
  ayudante?: string;
  comision125?: number;
  comision150?: number;
  comision170?: number;
  dia?: string;
  diferencia?: number;
  fechaDeEntrega?: string;
  gananciaFija?: number;
  id?: number;
  reparto?: Reparto;
  totalDeViaje?: number;
  zona?: string;
}
