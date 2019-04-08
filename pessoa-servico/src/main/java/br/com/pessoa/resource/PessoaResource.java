package br.com.pessoa.resource;

import br.com.pessoa.entity.Pessoa;
import br.com.pessoa.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value= "/pessoa")
public class PessoaResource {


    @Autowired
    private PessoaService pessoaService;

    @CrossOrigin(origins = "*")
    @PostMapping
    public void salvar(@RequestBody Pessoa pessoa) {
        pessoaService.salvarPessoa(pessoa);
    }
}
