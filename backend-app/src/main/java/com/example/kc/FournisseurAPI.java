package com.example.kc;

import java.util.List;
import java.security.Principal;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.core.context.SecurityContextHolder;

import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.representations.IDToken;
import org.keycloak.representations.AccessToken;


import com.example.kc.Fournisseur;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/api/fournisseurs")
public class FournisseurAPI {



  //  private final KeycloakSecurityContext securityContext;




  

	@Autowired
	private FournisseurRepository fournisseurRepository;

	
	@Autowired
	private FournisseurService fournisseurService;

	
	@GetMapping
	public List<Fournisseur> getAllFournisseurs() {

// 		if (securityContext != null && securityContext.getUserPrincipal() instanceof KeycloakPrincipal) {
//     KeycloakPrincipal principal = ((KeycloakPrincipal) securityContext.getUserPrincipal());
// 			System.out.println("my principal"+principal);

//     AccessToken token = principal.getKeycloakSecurityContext().getToken();
// 	System.out.println("my token in spring"+token);
//     // IDToken token = principal.getKeycloakSecurityContext().getIdToken();

//     System.out.println("User logged in: " + token.getPreferredUsername());
// } else {
//     System.out.println("SecurityContext could not provide a Keycloak context.");
// }


KeycloakAuthenticationToken authentication = (KeycloakAuthenticationToken) SecurityContextHolder.getContext()
            .getAuthentication();

        final Principal principal = (Principal) authentication.getPrincipal();
System.out.println("UserID from token:----"+principal);

        String dob = "";


if (principal instanceof KeycloakPrincipal) {

            KeycloakPrincipal<KeycloakSecurityContext> kPrincipal = (KeycloakPrincipal<KeycloakSecurityContext>) principal;
            IDToken idtoken = kPrincipal.getKeycloakSecurityContext() .getIdToken();

			AccessToken token = kPrincipal.getKeycloakSecurityContext().getToken();

         String Username = token.getPreferredUsername();
		 System.out.println("Username from token:-----"+Username);

            Map<String, Object> customClaims = token.getOtherClaims();

            if (customClaims.containsKey("dob")) {
                dob = String.valueOf(customClaims.get("dob"));
			
            }
			System.out.println("Custom Attribute DOB from token:---"+dob);
        }

		return fournisseurRepository.findAll();
	}
	

     

	@PostMapping
	public ResponseEntity<?> saveFournisseur(@RequestBody Fournisseur fournisseur) {

				
				fournisseur = fournisseurService.save(fournisseur);


		return new ResponseEntity<Fournisseur>(fournisseur, HttpStatus.CREATED);

	}
	


}
