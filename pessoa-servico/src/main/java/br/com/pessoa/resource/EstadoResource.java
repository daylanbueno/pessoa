package br.com.pessoa.resource;

import br.com.pessoa.entity.Estado;
import br.com.pessoa.service.EstadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/estados")
public class EstadoResource {

    @Autowired
    private EstadoService estadoService;

    @CrossOrigin(origins = "*")
    @GetMapping
    public List<Estado> recuperarEstados() {
        return estadoService.recuperarEstados();
    }
}
