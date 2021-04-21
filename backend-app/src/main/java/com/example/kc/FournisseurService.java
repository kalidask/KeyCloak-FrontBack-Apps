package com.example.kc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.kc.Fournisseur;

@Service
public class FournisseurService {

	@Autowired
	private FournisseurRepository fournisseurRepository;



	public Fournisseur save(Fournisseur fournisseur)  {


		return fournisseurRepository.save(fournisseur);
	}
	
	
	
}
