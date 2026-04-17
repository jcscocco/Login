package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class LoginController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping("/login")
    public String login(@RequestBody Usuario usuario) {

        Optional<Usuario> user = repository.findByEmail(usuario.getEmail());

        if (user.isEmpty()) {
            return "Usuário não encontrado";
        }

        if (!user.get().getSenha().equals(usuario.getSenha())) {
            return "Senha incorreta";
        }

        return "Login realizado com sucesso";
    }
}