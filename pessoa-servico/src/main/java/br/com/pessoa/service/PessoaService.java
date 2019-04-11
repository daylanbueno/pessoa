package br.com.pessoa.service;

import br.com.pessoa.entity.Pessoa;
import br.com.pessoa.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {


    @Autowired
    private PessoaRepository pessoaRepository;

    public void salvarPessoa(Pessoa pessoa) {
        pessoaRepository.save(pessoa);
    }

    public List<Pessoa>  recuperarPessoaPorCpf(String cpf) {
        return pessoaRepository.recuperarPessoaPorCpf(cpf);
    }

    public List<Pessoa> recuperarPessoaPorNome(String nome) {
        return pessoaRepository.recuperarPessoaPorNome(nome.toLowerCase());
    }

    public List<Pessoa> recuperarTodas() {
        return pessoaRepository.findAll();
    }

}
