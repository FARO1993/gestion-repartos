package com.gestion.repartos.model;

import javax.persistence.*;

@Entity
@Table(name = "reparto")
public class Reparto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "nombre", nullable = false)
	private String nombre;
	
	@Column(name = "responsable_de_reparto", nullable = false)
	private String responsableDeReparto;
	
	@Column(name = "efectivo")
	private Float efectivo;
	
	@Column(name = "descuentos")
	private Float descuentos;
	
	@Column(name = "nota_de_credito")
	private Float notaDeCredito;
	
	@Column(name = "cheques")
	private Float cheques;
	
	@Column(name = "mercado_pago")
	private Float mercadoPago;
	
	@Column(name = "facturas_firmadas")
	private Float facturasFirmadas;
	
	@Column(name = "transferencias")
	private Float transferencias;
	
	@Column(name = "total_de_reparto", nullable = false)
	private Float totalDeReparto;
	
	@Column(name = "diferencia")
	private Float diferencia;
	
	@Column(name = "total_entregado")
	private Float totalEntregado;

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
