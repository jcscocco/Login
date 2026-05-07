package com.example.demo.controller;

import com.example.demo.EmailService;
import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class CadastroController {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/cadastro")
    public String cadastrar(@Valid @RequestBody Usuario usuario, BindingResult result) {

        if (result.hasErrors()) {
            return "Email inválido ou campos vazios";
        }

        if (repository.findByEmail(usuario.getEmail()).isPresent()) {
            return "Email já cadastrado";
        }

        // Gera token de confirmação
        String token = UUID.randomUUID().toString();
        usuario.setToken(token);
        usuario.setConfirmado(false);

        repository.save(usuario);

        // Envia email de confirmação
        emailService.enviarEmailConfirmacao(usuario.getEmail(), token);

        return "Cadastro realizado! Verifique seu email para confirmar.";
    }

    @GetMapping("/confirmar")
    public String confirmar(@RequestParam String token) {
        return repository.findByToken(token)
            .map(user -> {
                user.setConfirmado(true);
                repository.save(user);
                return "Email confirmado com sucesso! Faça seu login.";
            })
            .orElse("Token inválido ou expirado.");
    }
}