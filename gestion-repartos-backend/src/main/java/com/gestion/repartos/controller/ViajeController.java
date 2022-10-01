package com.gestion.repartos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.repartos.DTO.ViajeDTO;
import com.gestion.repartos.model.Viaje;
import com.gestion.repartos.repository.ViajeRepository;
import com.gestion.repartos.service.ViajeService;

@RestController
@RequestMapping("/api/v1/")
public class ViajeController {

	@Autowired
	private ViajeService viajeService;

	@GetMapping(path = "findAllViajes", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<ViajeDTO> findAllViajes() {

		try {
			return viajeService.getViajesList();
		} catch (RuntimeException e) {
			System.out.println(e);
		}

		return null;
	}
	
	@PostMapping(path = "createViaje", consumes = {MediaType.APPLICATION_JSON_VALUE})
	public void createViaje(@RequestBody Viaje viaje) {
		try {
			viajeService.createViaje(viaje);
		} catch (RuntimeException e) {
			System.out.println(e);
		}
	}
	
	@PutMapping(path = "editViaje", consumes = {MediaType.APPLICATION_JSON_VALUE})
	public void editViaje(@RequestBody ViajeDTO viaje) {
		try {
			viajeService.updateViaje(viaje);
		} catch(RuntimeException e) {
			System.out.println(e);
		}
	}

}
