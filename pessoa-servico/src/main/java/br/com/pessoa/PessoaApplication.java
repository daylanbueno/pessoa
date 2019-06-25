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
		Pessoa pf = new Pessoa("DAILAN BUENO DOS SANTOS", null, "045.013.481-43",null, TipoSexo.MASCULINO, TipoPessoa.FISICA,contato,endereco);
		
		Contato contatoPj = new Contato("mr2inkjet@gmail.com","32011632","6191602632");

		Endereco enderecoPj = new Endereco("CA 01 CONJUNTO F LOJA" ,"58","N/A",brasilia);
		Pessoa pj = new Pessoa("MR2 INKJET LTDA", null, null,"78.460.600/0001-20", null, TipoPessoa.JURIDICA,contatoPj,enderecoPj);
		pessoaRepository.save(pf);
		pessoaRepository.save(pj);
	}
}
