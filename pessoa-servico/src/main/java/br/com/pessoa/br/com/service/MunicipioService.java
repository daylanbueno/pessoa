package br.com.pessoa.br.com.service;

import br.com.pessoa.br.com.entity.Estado;
import br.com.pessoa.br.com.entity.Municipio;
import br.com.pessoa.br.com.repository.MunicipioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MunicipioService {

    @Autowired
    private MunicipioRepository municipioRepository;

    public List<Municipio> recuperaMunicipio(Integer idEstado) {
        return municipioRepository.recuperarMunicipios(idEstado);
    }
}
