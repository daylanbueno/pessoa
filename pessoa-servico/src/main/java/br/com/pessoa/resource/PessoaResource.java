package br.com.pessoa.resource;

import br.com.pessoa.entity.Pessoa;
import br.com.pessoa.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value= "/pessoas")
public class PessoaResource {


    @Autowired
    private PessoaService pessoaService;

    @CrossOrigin(origins = "*")
    @PostMapping
    public void salvar(@RequestBody Pessoa pessoa) {
        pessoaService.salvarPessoa(pessoa);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/cpf/{cpf}")
    public List<Pessoa> recuperarPessoaPorCpf(@PathVariable ("cpf") String cpf) {
        return pessoaService.recuperarPessoaPorCpf(cpf);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/nome/{nome}")
    public List<Pessoa> recuperPessoaPorNome(@PathVariable ("nome") String nome) {
        return pessoaService.recuperarPessoaPorNome(nome);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/id/{id}")
    public Pessoa recuperPessoaPorNome(@PathVariable ("id") Integer id) {
        return pessoaService.recuperarPessoaPorId(id);
    }



    @CrossOrigin(origins = "*")
    @GetMapping("")
    public List<Pessoa> recuperPessoaPorNome() {
        return pessoaService.recuperarTodas();
    }


}
