package br.com.pessoa.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.pessoa.entity.Usuario;
import br.com.pessoa.enums.TipoPerfil;
import br.com.pessoa.repository.UsuarioRepository;
import br.com.pessoa.security.UserSS;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UsuarioRepository UsuarioRepository;

	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		Usuario usuario = UsuarioRepository.recuperarUsuarioPorLogin(login);
		if(usuario == null) {
			throw new UsernameNotFoundException("Usuário não existe!" + login);
		}
		Set<TipoPerfil> perfis = new HashSet<>();
		perfis.add(usuario.getTipoPerfil());
		
		return new UserSS(usuario.getLogin(), usuario.getSenha(), perfis);
	}

}
