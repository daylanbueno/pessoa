package br.com.pessoa.service;

import br.com.pessoa.entity.Pessoa;
import br.com.pessoa.repository.PessoaRepository;
import br.com.pessoa.service.exceptions.ObjectNotFoundException;
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
        List<Pessoa> pessoas = pessoaRepository.recuperarPessoaPorCpf(cpf);
        if(pessoas == null || pessoas.size() == 0) {
            throw new ObjectNotFoundException("Objeto não encontrato!  Cpf: "+cpf);
        }
        return pessoas;
    }

    public List<Pessoa> recuperarPessoaPorNome(String nome) {
        return pessoaRepository.recuperarPessoaPorNome(nome.toLowerCase());
    }

    public List<Pessoa> recuperarTodas() {
        return pessoaRepository.findAll();
    }

    public Pessoa recuperarPessoaPorId(Integer id) {
        return pessoaRepository.findById(id).get();
    }

}
