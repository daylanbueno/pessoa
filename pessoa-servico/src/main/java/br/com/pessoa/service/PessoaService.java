package br.com.pessoa.service;

import br.com.pessoa.entity.Pessoa;
import br.com.pessoa.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PessoaService {


    @Autowired
    private PessoaRepository pessoaRepository;

    public void salvarPessoa(Pessoa pessoa) {
        pessoaRepository.save(pessoa);
    }

}
