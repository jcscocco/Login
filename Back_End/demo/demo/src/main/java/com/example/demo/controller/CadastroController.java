package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class CadastroController {

    @Autowired
    private UsuarioRepository repository;

    @PostMapping("/cadastro")
    public String cadastrar(@Valid @RequestBody Usuario usuario, BindingResult result) {

        if (result.hasErrors()) {
            return "Email inválido ou campos vazios";
        }

        if (repository.findByEmail(usuario.getEmail()).isPresent()) {
            return "Email já cadastrado";
        }

        repository.save(usuario);
        return "Cadastro realizado com sucesso";
    }
}