package br.com.pessoa.br.com.service;

import br.com.pessoa.br.com.entity.Estado;
import br.com.pessoa.br.com.repository.EstadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstadoService {

    @Autowired
    private EstadoRepository estadoRepository;

    public List<Estado> recuperarEstados() {
        return estadoRepository.findAll();
    }
}
