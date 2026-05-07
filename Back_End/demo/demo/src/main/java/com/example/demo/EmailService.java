package com.example.demo;

import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import com.resend.services.emails.model.CreateEmailResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Value("${resend.api.key}")
    private String resendApiKey;

    public void enviarEmailConfirmacao(String destinatario, String token) {
        Resend resend = new Resend(resendApiKey);

        String link = "http://localhost:8080/auth/confirmar?token=" + token;

        CreateEmailOptions params = CreateEmailOptions.builder()
            .from("onboarding@resend.dev")
            .to(destinatario)
            .subject("Confirme seu cadastro")
            .html("<h2>Bem-vindo!</h2>" +
                  "<p>Clique no link abaixo para confirmar seu cadastro:</p>" +
                  "<a href='" + link + "'>Confirmar Email</a>")
            .build();

        try {
            CreateEmailResponse response = resend.emails().send(params);
            System.out.println("Email enviado: " + response.getId());
        } catch (ResendException e) {
            System.out.println("Erro ao enviar email: " + e.getMessage());
        }
    }
}