package br.com.pessoa.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.pessoa.entity.Usuario;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private AuthenticationManager authenticationManager;
    private JwtUtil jwtUtil;
	
	public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
		this.authenticationManager = authenticationManager;
		this.jwtUtil = jwtUtil;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res)
			throws AuthenticationException {
		try {
			Usuario creds = new ObjectMapper()
	                .readValue(req.getInputStream(), Usuario.class);
	
	        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(creds.getLogin(), creds.getSenha(), new ArrayList<>());
	        
	        Authentication auth = authenticationManager.authenticate(authToken);
	        return auth;
		}
		catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain,
			Authentication auth) throws IOException, ServletException {
		String username = ((UserSS) auth.getPrincipal()).getUsername();
        String token = jwtUtil.gerarToken(username);
        res.addHeader("Authorization", "Bearer " + token);
        res.addHeader("access-control-expose-headers", "Authorization");

	}

}
