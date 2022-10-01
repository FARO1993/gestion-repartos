package com.gestion.repartos.DTO;

import java.io.Serializable;
import java.util.Date;

public class ViajeDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String dia;
	private String ayudante;
	private Date fechaDeEntrega;
	private String zona;
	private Float totalDeViaje;
	private Float gananciaFija;
	private Float comision170;
	private Float comision150;
	private Float comision125;
	
	public ViajeDTO() {
		
	}

	public ViajeDTO(Long id, String dia, String ayudante, Date fechaDeEntrega, String zona,
			Float totalDeViaje, Float gananciaFija, Float comision170,
			Float comision150, Float comision125) {
		this.id = id;
		this.dia = dia;
		this.ayudante = ayudante;
		this.fechaDeEntrega = fechaDeEntrega;
		this.zona = zona;
		this.totalDeViaje = totalDeViaje;
		this.gananciaFija = gananciaFija;
		this.comision170 = comision170;
		this.comision150 = comision150;
		this.comision125 = comision125;
	}

	public Float getGananciaFija() {
		return gananciaFija;
	}

	public void setGananciaFija(Float gananciaFija) {
		this.gananciaFija = gananciaFija;
	}

	public Float getComision170() {
		return comision170;
	}

	public void setComision170(Float comision170) {
		this.comision170 = comision170;
	}

	public Float getComision150() {
		return comision150;
	}

	public void setComision150(Float comision150) {
		this.comision150 = comision150;
	}

	public Float getComision125() {
		return comision125;
	}

	public void setComision125(Float comision125) {
		this.comision125 = comision125;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDia() {
		return dia;
	}

	public void setDia(String dia) {
		this.dia = dia;
	}

	public String getAyudante() {
		return ayudante;
	}

	public void setAyudante(String ayudante) {
		this.ayudante = ayudante;
	}

	public Date getFechaDeEntrega() {
		return fechaDeEntrega;
	}

	public void setFechaDeEntrega(Date fechaDeEntrega) {
		this.fechaDeEntrega = fechaDeEntrega;
	}

	public String getZona() {
		return zona;
	}

	public void setZona(String zona) {
		this.zona = zona;
	}

	public Float getTotalDeViaje() {
		return totalDeViaje;
	}

	public void setTotalDeViaje(Float totalDeViaje) {
		this.totalDeViaje = totalDeViaje;
	}

}
