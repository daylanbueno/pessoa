package br.com.pessoa;

import br.com.pessoa.entity.Estado;
import br.com.pessoa.entity.Municipio;
import br.com.pessoa.repository.MunicipioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PessoaApplication implements CommandLineRunner {

	@Autowired
	private MunicipioRepository municipioRepository;


	public static void main(String[] args) {
		SpringApplication.run(PessoaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Estado distritoFederal = new Estado("Distrito Federal","DF");
		Municipio brasilia = new Municipio("Brasília",distritoFederal);
		municipioRepository.save(brasilia);
	}
}
