package com.gestion.repartos.model;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "viaje")
public class Viaje {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "dia", nullable = false)
	private String dia;
	
	@JoinColumn(name = "id_reparto")
	@OneToOne(cascade=CascadeType.ALL)
	private Reparto reparto;
	
	@Column(name = "ayudante", nullable = false)
	private String ayudante;
	
	@Column(name = "fecha_de_entrega")
	private Date fechaDeEntrega;
	
	@Column(name = "zona", nullable = false)
	private String zona;
	
	@Column(name = "total_de_viaje", nullable = false)
	private Float totalDeViaje;
	
	@Column(name= "ganancia_fija", nullable = false)
	private Float gananciaFija;
	
	@Column(name= "comision_1_70", nullable = false)
	private Float comision170;
	
	@Column(name= "comision_1_50", nullable = false)
	private Float comision150;
	
	@Column(name= "comision_1_25", nullable = false)
	private Float comision125;
	
	public Viaje() {
		
	}

	public Viaje(Long id, String dia, Reparto reparto, String ayudante, Date fechaDeEntrega, String zona,
			Float totalDeViaje, Float gananciaFija, Float comision170, Float comision150, Float comision125) {
		this.id = id;
		this.dia = dia;
		this.reparto = reparto;
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

	public Reparto getReparto() {
		return reparto;
	}

	public void setReparto(Reparto reparto) {
		this.reparto = reparto;
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
