package br.com.pessoa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.pessoa.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    @Query(value = "SELECT user FROM Usuario user WHERE user.login = :login")
    public Usuario recuperarUsuarioPorLogin(String login);
    
    @Query(value = "SELECT user FROM Usuario user WHERE user.pessoa.cpf = :cpf")
    public Usuario recuperarUsuarioPorCpf(String cpf);
}
