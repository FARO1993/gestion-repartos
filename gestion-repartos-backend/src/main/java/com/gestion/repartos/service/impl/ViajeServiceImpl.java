package com.gestion.repartos.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gestion.repartos.DTO.ViajeDTO;
import com.gestion.repartos.model.Viaje;
import com.gestion.repartos.repository.ViajeRepository;
import com.gestion.repartos.service.ViajeService;

@Service
public class ViajeServiceImpl implements ViajeService {

	@Autowired
	private ViajeRepository viajeRepository;

	@Override
	public List<ViajeDTO> getViajesList() {
		return viajeRepository.findAllViajes();
	}

	@Override
	public void createViaje(Viaje viaje) {
		viajeRepository.save(viaje);
	}

	@Transactional
	@Override
	public void updateViaje(ViajeDTO viaje) {
		
		try {
			Viaje viajeUpdate = viajeRepository.findById(viaje.getId()).orElse(null);
			viajeUpdate.setDia(viaje.getDia());
			viajeUpdate.setAyudante(viaje.getAyudante());
			viajeUpdate.setFechaDeEntrega(viaje.getFechaDeEntrega());
			viajeUpdate.setZona(viaje.getZona());
			viajeUpdate.setTotalDeViaje(viaje.getTotalDeViaje());
			viajeUpdate.setGananciaFija(viaje.getGananciaFija());
			viajeUpdate.setComision170(viaje.getComision170());
			viajeUpdate.setComision150(viaje.getComision150());
			viajeUpdate.setComision125(viaje.getComision125());
			viajeRepository.save(viajeUpdate);
		} catch(RuntimeException e) {
			System.out.println(e);
		}
		
	}

	@Override
	public void deleteViaje(Long id) {
		viajeRepository.deleteById(id);
	}

	@Transactional
	@Override
	public Viaje findViajeById(Long id) {		
		return viajeRepository.findViajeById(id);
	}
	

}
