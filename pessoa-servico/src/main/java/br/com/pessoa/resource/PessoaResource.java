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

    @PostMapping
    public void salvar(@RequestBody Pessoa pessoa) {
        pessoaService.salvarPessoa(pessoa);
    }

    @GetMapping("/cpf/{cpf}")
    public List<Pessoa> recuperarPessoaPorCpf(@PathVariable ("cpf") String cpf) {
        return pessoaService.recuperarPessoaPorCpf(cpf);
    }

   
    @GetMapping("/cnpj")
    public List<Pessoa> recuperarPessoaPorCnpj(@RequestParam String cnpj) {
        return pessoaService.recuperarPessoaPorCnpj(cnpj);
    }
    
    @GetMapping("/nome/{nome}")
    public List<Pessoa> recuperPessoaPorNome(@PathVariable ("nome") String nome) {
        return pessoaService.recuperarPessoaPorNome(nome);
    }

    @GetMapping("/id/{id}")
    public Pessoa recuperPessoaPorNome(@PathVariable ("id") Integer id) {
        return pessoaService.recuperarPessoaPorId(id);
    }

    @DeleteMapping("/id/{id}")
    public void deleteById(@PathVariable ("id") Integer id) {
         pessoaService.deleteById(id);
    }

    @GetMapping("")
    public List<Pessoa> recuperPessoaPorNome() {
        return pessoaService.recuperarTodas();
    }


}
