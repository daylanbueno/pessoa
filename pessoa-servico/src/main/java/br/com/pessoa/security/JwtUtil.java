package br.com.pessoa.security;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtil  {
	
	@Value("${jwt.secret}")
	private String secret;
	
	@Value("${jwt.experation}")
	private Long expiration;
	
	public String gerarToken(String login) {
		return Jwts.builder()
		.setSubject(login)
		.setExpiration(new Date(System.currentTimeMillis()+this.expiration))
		.signWith(SignatureAlgorithm.HS512, secret.getBytes())
		.compact();
	}
	
}
