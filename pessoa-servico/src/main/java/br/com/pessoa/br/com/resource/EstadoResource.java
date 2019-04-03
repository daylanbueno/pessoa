package br.com.pessoa.br.com.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/estado")
public class EstadoResource {

    @GetMapping("/teste")
    public String teste() {
        return "Testando api";
    }
}
