package br.com.pessoa.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pessoa.entity.Usuario;
import br.com.pessoa.service.UsuarioService;

@RestController
@RequestMapping(value = "/logins")
public class LoginResource {

	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping
	public void salvar(@RequestBody Usuario user) {
		usuarioService.salvarUsuario(user);
	}
}
