package com.gestion.repartos.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
