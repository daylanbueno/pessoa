package br.com.pessoa.br.com.resource;

import br.com.pessoa.br.com.entity.Municipio;
import br.com.pessoa.br.com.service.MunicipioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/municipios")
public class ResourceMunicipio {

    @Autowired
    private MunicipioService municipioService;

    @GetMapping("/{idEstado}")
    public List<Municipio> recuperarMunicipios(@PathVariable  Integer idEstado){
        return  municipioService.recuperaMunicipio(idEstado);
    }
}

