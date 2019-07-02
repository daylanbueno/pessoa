package br.com.pessoa.service;

import java.util.List;

import javax.management.RuntimeErrorException;

import org.jboss.jandex.TypeTarget.Usage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.pessoa.dto.UsuarioDto;
import br.com.pessoa.entity.Pessoa;
import br.com.pessoa.entity.Usuario;
import br.com.pessoa.enums.TipoPerfil;
import br.com.pessoa.repository.PessoaRepository;
import br.com.pessoa.repository.UsuarioRepository;
import br.com.pessoa.service.exceptions.NegocioException;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public void salvarUsuario(Usuario user) {
		usuarioRepository.save(user);
	}

	public void salvarOrAtualizarUsuario(UsuarioDto user) {
		Pessoa pessoa = pessoaRepository.findById(user.getIdPessoa()).get();
		Usuario usuarioAExistente = usuarioRepository.recuperarUsuarioPorCpf(pessoa.getCpf());
		Usuario usuarioEntity = converterUsuarioParaEntidade(user,pessoa);
		if (usuarioAExistente != null) {
			usuarioEntity.setId(usuarioAExistente.getId());
		}
		jaExisteUsuarioComMesmoLogin(user);
		codificarSenhaUsuario(usuarioEntity);
		usuarioRepository.save(usuarioEntity);
	}
	
	private void jaExisteUsuarioComMesmoLogin(UsuarioDto usuarioDto) {
		Usuario user = usuarioRepository.recuperarUsuarioPorLogin(usuarioDto.getLogin());
		if (user != null && !user.getPessoa().getCpf().equals(usuarioDto.getCpf())) {
			throw  new NegocioException("Já existe um usuário com esse login definido, favor escolha outro login valido.");
		}
	}
	
	private void codificarSenhaUsuario(Usuario usuario) {
		usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
	}

	private Usuario converterUsuarioParaEntidade(UsuarioDto usuarioDto, Pessoa pessoa) {
		return new Usuario(usuarioDto.getLogin(), usuarioDto.getSenha(), pessoa, TipoPerfil.ROLE_ADMIN);
	}

	
	public UsuarioDto recuperarUsuarioPorCpf(String cpf) {
		Usuario usuario = usuarioRepository.recuperarUsuarioPorCpf(cpf);
		if(usuario == null) {
			try {
				Pessoa pessoa = recuraPessoaPorCpf(cpf);
				UsuarioDto usuarioDto = new UsuarioDto(pessoa.getnome(), null, null, cpf,pessoa.getId());
				return usuarioDto;
			} catch (Exception e) {
				System.out.println("Error: "+ e.getMessage());
				return null;
			}
		}
		return new UsuarioDto(usuario.getPessoa().getnome(), usuario.getLogin(), null, null,usuario.getPessoa().getId());
	}
	
	private Pessoa recuraPessoaPorCpf(String cpf) {
		List<Pessoa> pessoas  = pessoaRepository.recuperarPessoaPorCpf(cpf);
		if(pessoas.isEmpty()) {
			throw new RuntimeErrorException(null, "Não encontrou pessoa ");
		}
		return pessoas.get(0);		
	}
}
