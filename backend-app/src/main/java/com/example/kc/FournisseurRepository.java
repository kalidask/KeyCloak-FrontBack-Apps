package com.example.kc;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.kc.Fournisseur;

@CrossOrigin("*")
@RepositoryRestResource
public interface FournisseurRepository extends JpaRepository<Fournisseur, Long> {


	
	
}
