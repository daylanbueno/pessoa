package br.com.pessoa.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pessoa.dto.UsuarioDto;
import br.com.pessoa.entity.Usuario;
import br.com.pessoa.service.UsuarioService;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioResource {

	@Autowired
	private UsuarioService usuarioService;

	@PostMapping
	public void salvarUsuario(@RequestBody UsuarioDto user) {
		usuarioService.salvarOrAtualizarUsuario(user);
	}
	
	
	@GetMapping("/{cpf}")
	public UsuarioDto recuperarUsuario(@PathVariable String cpf) {
		return usuarioService.recuperarUsuarioPorCpf(cpf);
	}
}
