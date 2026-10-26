package com.Backend.Config;

import com.Backend.Entity.User;
import com.Backend.Services.UserServices;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class Oauth2SuccessHandler implements AuthenticationSuccessHandler {

    @Getter
    private User user=new User();

    @Autowired
    private UserServices userServices;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2AuthenticationToken token=(OAuth2AuthenticationToken) authentication;
        OAuth2User oAuth2User=(OAuth2User) authentication.getPrincipal();
        String email=oAuth2User.getAttribute("email");
        String name=oAuth2User.getAttribute("name");
        String providerId=oAuth2User.getAttribute("sub");
        String providerType= token.getAuthorizedClientRegistrationId();

        User user= User.builder().name(name).email(email).username(email).password(providerId).providerId(providerId).providerType(providerType).build();

        if (!userServices.userExistCheck(email)){
            userServices.saveNewUser(user);
        }
        this.user=userServices.getByUsername(email);
    }

}
