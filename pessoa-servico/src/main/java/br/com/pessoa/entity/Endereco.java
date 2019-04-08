package br.com.pessoa.entity;

import javax.persistence.*;

@Entity
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String logradouro;

    private String numero;

    private String complemento;

    public Endereco() {}

    public Endereco(String logradouro, String numero, String complemento, Municipio municipio) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.municipio = municipio;
    }

    @ManyToOne
    @JoinColumn(nullable =  false)
    private Municipio municipio;

    public Integer getId() {
        return id;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public String getNumero() {
        return numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public Municipio getMunicipio() {
        return municipio;
    }

}
