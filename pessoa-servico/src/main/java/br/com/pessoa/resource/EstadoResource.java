package br.com.pessoa.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pessoa.entity.Estado;
import br.com.pessoa.service.EstadoService;

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
