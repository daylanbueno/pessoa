package br.com.pessoa.security;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.pessoa.enums.TipoPerfil;

public class UserSS implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String login;
	private String senha;
	private Collection<? extends GrantedAuthority> authorities;
	
	
	

	public UserSS(String login, String senha,  Set<TipoPerfil> perfis) {
		super();
		this.login = login;
		this.senha = senha;
		this.authorities  = perfis.stream().map(it ->  new SimpleGrantedAuthority(perfis.toString())).collect(Collectors.toList())  ;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return this.senha;
	}

	@Override
	public String getUsername() {
		return this.login;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
