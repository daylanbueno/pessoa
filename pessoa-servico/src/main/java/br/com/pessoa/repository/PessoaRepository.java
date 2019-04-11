package br.com.pessoa.repository;

import br.com.pessoa.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PessoaRepository extends JpaRepository<Pessoa,Integer> {

    @Query(value = "SELECT p FROM Pessoa p WHERE p.cpf = :cpf")
    public List<Pessoa> recuperarPessoaPorCpf(String cpf);

    @Query(value = "SELECT p FROM Pessoa p WHERE  lower(p.nomeCompleto)  like %:nome%")
    public List<Pessoa> recuperarPessoaPorNome(String nome);

}
