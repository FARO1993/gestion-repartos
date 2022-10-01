package com.gestion.repartos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gestion.repartos.DTO.ViajeDTO;
import com.gestion.repartos.model.Viaje;

@Repository
public interface ViajeRepository extends JpaRepository<Viaje, Long>{
	
	@Query("select distinct new com.gestion.repartos.DTO.ViajeDTO( " 
		   +"v.id, "
		   +"v.dia, "
		   +"v.ayudante, "
		   +"v.fechaDeEntrega, "
		   +"v.zona, "
		   +"v.totalDeViaje, "
		   +"v.gananciaFija, "
		   +"v.comision170, "
		   +"v.comision150, "
		   +"v.comision125 "
		   +") "
		   +"from Viaje v ")
	public List<ViajeDTO> findAllViajes();
	
}
