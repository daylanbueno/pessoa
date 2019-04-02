package br.com.pessoa.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/estados")
public class EstadoResource {
	
	@GetMapping("/listar")
	public String recupera() {
		return "rest";
	}

}
