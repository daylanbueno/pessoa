package br.com.pessoa.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class Pessoa implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    private Integer id;

    private String nome;

    private LocalDate dataNascimento;

    private String cpf;
    
    private String cnpj;

    @Enumerated(EnumType.STRING)
    private TipoSexo sexo;
    
    @Enumerated(EnumType.STRING)
    private TipoPessoa tipoPessoa;
    
    @JoinColumn(nullable =  false)
    @OneToOne(cascade = CascadeType.ALL)
    private Contato contato;

    @JoinColumn(nullable = false)
    @OneToOne(cascade = CascadeType.ALL)
    private Endereco endereco;

    public Pessoa() {}
    
	public Pessoa(String nome, LocalDate dataNascimento, String cpf, String cnpj, TipoSexo sexo,
			TipoPessoa tipoPessoa, Contato contato, Endereco endereco) {
		super();
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.cpf = cpf;
		this.cnpj = cnpj;
		this.sexo = sexo;
		this.tipoPessoa = tipoPessoa;
		this.contato = contato;
		this.endereco = endereco;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getnome() {
        return nome;
    }

    public void setnome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    
    public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public TipoSexo getSexo() {
        return sexo;
    }

    public void setSexo(TipoSexo sexo) {
        this.sexo = sexo;
    }
    
    public TipoPessoa getTipoPessoa() {
		return tipoPessoa;
	}

	public void setTipoPessoa(TipoPessoa tipoPessoa) {
		this.tipoPessoa = tipoPessoa;
	}


	public Contato getContato() {
        return contato;
    }

    public void setContato(Contato contato) {
        this.contato = contato;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
