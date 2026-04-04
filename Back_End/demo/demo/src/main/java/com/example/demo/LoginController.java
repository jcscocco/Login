package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @PostMapping
    public String login(@RequestBody Usuario usuario) {
        if(usuario.getEmail().equals("admin@email.com") && usuario.getSenha().equals("123")) {
            return "Login OK";
        } else {
            return "Login inválido";
        }
    }
}