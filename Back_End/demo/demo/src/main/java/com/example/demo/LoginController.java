package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class LoginController {

    @PostMapping
    public String login(@RequestBody Usuario usuario) {
        if(usuario.getEmail().equals("juliococco2801@gmail.com") && usuario.getSenha().equals("12345        ")) {
            return "Login OK";
        } else {
            return "Login inválido";
        }
    }
}