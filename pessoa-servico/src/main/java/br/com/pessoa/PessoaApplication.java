package br.com.pessoa;

import br.com.pessoa.entity.*;
import br.com.pessoa.repository.MunicipioRepository;
import br.com.pessoa.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PessoaApplication implements CommandLineRunner {

	@Autowired
	private MunicipioRepository municipioRepository;

	@Autowired
	private PessoaRepository pessoaRepository;


	public static void main(String[] args) {
		SpringApplication.run(PessoaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Estado distritoFederal = new Estado("Distrito Federal","DF");
		Municipio brasilia = new Municipio("Brasília",distritoFederal);
		municipioRepository.save(brasilia);

		Endereco endereco = new Endereco("Cond Residencial Conjunto c casa ","23","N/a",brasilia);
		Contato contato = new Contato("daylansantos@gmail.com","32011632","6191602632");
		Pessoa pessoa = new Pessoa("Dailan Bueno", "045.013.481-43",TipoSexo.MASCULINO,contato,endereco);
		pessoaRepository.save(pessoa);
	}
}
