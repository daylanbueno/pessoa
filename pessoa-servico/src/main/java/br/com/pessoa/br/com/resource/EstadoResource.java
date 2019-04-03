package br.com.pessoa.br.com.resource;

import br.com.pessoa.br.com.entity.Estado;
import br.com.pessoa.br.com.service.EstadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/estados")
public class EstadoResource {

    @Autowired
    private EstadoService estadoService;

    @GetMapping
    public List<Estado> recuperarEstados() {
        return estadoService.recuperarEstados();
    }
}
