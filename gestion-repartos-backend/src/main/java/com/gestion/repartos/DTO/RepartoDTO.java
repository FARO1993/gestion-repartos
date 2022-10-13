package com.gestion.repartos.DTO;

import java.io.Serializable;

public class RepartoDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	private String nombre;
	private String responsableDeReparto;
	private Float efectivo;
	private Float descuentos;
	private Float notaDeCredito;
	private Float cheques;
	private Float mercadoPago;
	private Float facturasFirmadas;
	private Float transferencias;
	private Float totalDeReparto;
	private Float diferencia;
	private Float totalEntregado;

	public RepartoDTO() {

	}

	public RepartoDTO(Long id, String nombre, String responsableDeReparto, Float efectivo, Float descuentos,
			Float notaDeCredito, Float cheques, Float mercadoPago, Float facturasFirmadas, Float transferencias,
			Float totalDeReparto, Float diferencia, Float totalEntregado) {
		this.id = id;
		this.nombre = nombre;
		this.responsableDeReparto = responsableDeReparto;
		this.efectivo = efectivo;
		this.descuentos = descuentos;
		this.notaDeCredito = notaDeCredito;
		this.cheques = cheques;
		this.mercadoPago = mercadoPago;
		this.facturasFirmadas = facturasFirmadas;
		this.transferencias = transferencias;
		this.totalDeReparto = totalDeReparto;
		this.diferencia = diferencia;
		this.totalEntregado = totalEntregado;
	}

	public Float getTotalEntregado() {
		return totalEntregado;
	}

	public void setTotalEntregado(Float totalEntregado) {
		this.totalEntregado = totalEntregado;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getResponsableDeReparto() {
		return responsableDeReparto;
	}

	public void setResponsableDeReparto(String responsableDeReparto) {
		this.responsableDeReparto = responsableDeReparto;
	}

	public Float getEfectivo() {
		return efectivo;
	}

	public void setEfectivo(Float efectivo) {
		this.efectivo = efectivo;
	}

	public Float getDescuentos() {
		return descuentos;
	}

	public void setDescuentos(Float descuentos) {
		this.descuentos = descuentos;
	}

	public Float getNotaDeCredito() {
		return notaDeCredito;
	}

	public void setNotaDeCredito(Float notaDeCredito) {
		this.notaDeCredito = notaDeCredito;
	}

	public Float getCheques() {
		return cheques;
	}

	public void setCheques(Float cheques) {
		this.cheques = cheques;
	}

	public Float getMercadoPago() {
		return mercadoPago;
	}

	public void setMercadoPago(Float mercadoPago) {
		this.mercadoPago = mercadoPago;
	}

	public Float getFacturasFirmadas() {
		return facturasFirmadas;
	}

	public void setFacturasFirmadas(Float facturasFirmadas) {
		this.facturasFirmadas = facturasFirmadas;
	}

	public Float getTransferencias() {
		return transferencias;
	}

	public void setTransferencias(Float transferencias) {
		this.transferencias = transferencias;
	}

	public Float getTotalDeReparto() {
		return totalDeReparto;
	}

	public void setTotalDeReparto(Float totalDeReparto) {
		this.totalDeReparto = totalDeReparto;
	}

	public Float getDiferencia() {
		return diferencia;
	}

	public void setDiferencia(Float diferencia) {
		this.diferencia = diferencia;
	}

}
