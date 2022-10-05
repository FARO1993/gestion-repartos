package com.gestion.repartos.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.repartos.DTO.ViajeDTO;
import com.gestion.repartos.model.Viaje;

@Service
public interface ViajeService {
	
	//Obtengo el listado con todos los viajes realizados.
	public List<ViajeDTO> getViajesList();
	
	public void createViaje(Viaje viaje);
	
	public void updateViaje(ViajeDTO viaje);
	
	public void deleteViaje(Long id);
	
	public Viaje findViajeById(Long id);
}
