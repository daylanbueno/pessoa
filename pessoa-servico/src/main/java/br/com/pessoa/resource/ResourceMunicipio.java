package br.com.pessoa.resource;

import br.com.pessoa.entity.Municipio;
import br.com.pessoa.service.MunicipioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/municipios")
public class ResourceMunicipio {

    @Autowired
    private MunicipioService municipioService;

    @GetMapping("/{idEstado}")
    @CrossOrigin(origins = "*")
    public List<Municipio> recuperarMunicipios(@PathVariable  Integer idEstado){
        return  municipioService.recuperaMunicipio(idEstado);
    }
}

