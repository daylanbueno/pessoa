package br.com.pessoa.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import br.com.pessoa.security.JWTAuthorizationFilter;
import br.com.pessoa.security.JwtAuthenticationFilter;
import br.com.pessoa.security.JwtUtil;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtutil;
	
	private static final String [] PUBLIC_MACHES = {
			"/h2-console/**"
	};
	
	private static final String [] PUBLIC_MACHES_GET = {
			"/estados/**",
			"/municipios/**"
	};
	
	/**
	 * Método responsável por controlar o acesso  para os recursos. 
	 */
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.headers().frameOptions().disable(); // liberando acesso ao h2
		http.cors() // especifica que vou usar configuração de cors origin  que eu definir
	    .and().csrf().disable(); 
		http.authorizeRequests().antMatchers(HttpMethod.GET ,PUBLIC_MACHES_GET).permitAll()
		.antMatchers(PUBLIC_MACHES).permitAll()
		.anyRequest().authenticated();
		http.addFilter(new JwtAuthenticationFilter(authenticationManager(),jwtutil));
		http.addFilter(new JWTAuthorizationFilter(authenticationManager(),jwtutil,userDetailsService));
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); // meu servico não vai criar sessão para usuário.
	}
	
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
	}
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		final UrlBasedCorsConfigurationSource source =  new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
		return  source;
	}
	
	@Bean
	public BCryptPasswordEncoder  bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
}
