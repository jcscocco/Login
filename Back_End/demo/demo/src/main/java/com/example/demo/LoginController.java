package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {

    private final UsuarioRepository repo;

    public LoginController(UsuarioRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/cadastro")
    public String cadastro(@RequestBody Usuario usuario) {
        repo.save(usuario);
        return "Usuário cadastrado!";
    }

    @PostMapping("/login")
    public String login(@RequestBody Usuario usuario) {

        Usuario u = repo.findByEmail(usuario.getEmail());

        if (u != null && u.getSenha().equals(usuario.getSenha())) {
            return "Login OK";
        }

        return "Login inválido";
    }
}