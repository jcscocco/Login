package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {

    @PostMapping("/cadastro")
    public String cadastro(@RequestBody Usuario usuario) {
        BancoFake.usuarios.add(usuario);
        return "Usuário cadastrado com sucesso!";
    }

    @PostMapping("/login")
    public String login(@RequestBody Usuario usuario) {
        for (Usuario u : BancoFake.usuarios) {
            if (u.getEmail().equals(usuario.getEmail()) &&
                u.getSenha().equals(usuario.getSenha())) {
                return "Login OK";
            }
        }
        return "Login inválido";
    }
}