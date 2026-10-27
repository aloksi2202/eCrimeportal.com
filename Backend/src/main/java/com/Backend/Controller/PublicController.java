
package com.Backend.Controller;

import com.Backend.Config.Oauth2SuccessHandler;
import com.Backend.Entity.User;
import com.Backend.Services.UserDetailsServiceImpl;
import com.Backend.Services.UserServices;
import com.Backend.Utiles.JwtUtil;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@Slf4j
@RestController
@RequestMapping("/public")
public class PublicController {

    @Autowired
    private UserServices userServices;

    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private Oauth2SuccessHandler successHandler;

    // SIGN UP
    @PostMapping("/sign-up")
    public ResponseEntity<String> signUp(@RequestBody User user) {

        if (user == null
                || user.getUsername() == null
                || user.getUsername().isBlank()
                || user.getPassword() == null
                || user.getPassword().isBlank()) {
            return ResponseEntity.badRequest()
                    .body("Username and password are required");
        }

        String username = user.getUsername().trim();

        if (userServices.getByUsername(username) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("Username already exists");
        }

        user.setUsername(username);

        // saveNewUser encodes the password using BCrypt
        userServices.saveNewUser(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body("saved");
    }

    // LOGIN
    @PostMapping("/log-in")
    public ResponseEntity<String> login(@RequestBody User user) {

        if (user == null
                || user.getUsername() == null
                || user.getUsername().isBlank()
                || user.getPassword() == null
                || user.getPassword().isBlank()) {
            return ResponseEntity.badRequest()
                    .body("Username and password are required");
        }

        String username = user.getUsername().trim();

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            username,
                            user.getPassword()
                    )
            );

            UserDetails userDetails =
                    userDetailsServiceImpl.loadUserByUsername(username);

            String jwt = jwtUtil.generateToken(userDetails.getUsername());

            return ResponseEntity.ok(jwt);

        } catch (AuthenticationException e) {
            log.warn("Login authentication failed for username: {}", username);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");

        } catch (Exception e) {
            log.error("Login failed due to a server error", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Login failed due to a server error");
        }
    }

    // CHECK USERNAME
    @PostMapping("/check-username")
    public ResponseEntity<String> checkUsername(
            @RequestBody String username) {

        if (username == null || username.isBlank()) {
            return ResponseEntity.ok("");
        }

        username = username.trim();

        if (userServices.getByUsername(username) != null) {
            return ResponseEntity.ok("Username already exists");
        }

        return ResponseEntity.ok("ok");
    }

    // CHECK MOBILE
    @PostMapping("/check-mobile")
    public ResponseEntity<String> checkMobile(
            @RequestBody String mobile) {

        if (mobile == null || mobile.isBlank()) {
            return ResponseEntity.ok("");
        }

        List<User> users = userServices.getAll();

        for (User entity : users) {
            if (Objects.equals(entity.getMobile(), mobile.trim())) {
                return ResponseEntity.ok("Mobile no. already exists");
            }
        }

        return ResponseEntity.ok("ok");
    }

    // CHECK EMAIL
    @PostMapping("/check-email")
    public ResponseEntity<String> checkEmail(
            @RequestBody String email) {

        if (email == null || email.isBlank()) {
            return ResponseEntity.ok("");
        }

        List<User> users = userServices.getAll();

        for (User entity : users) {
            if (entity.getEmail() != null
                    && entity.getEmail().equalsIgnoreCase(email.trim())) {
                return ResponseEntity.ok("Email already exists");
            }
        }

        return ResponseEntity.ok("ok");
    }

    // GOOGLE OAUTH2 TOKEN
    @GetMapping("/oauth2/login/token-generate")
    public ResponseEntity<String> oauth2Login() {

        User user = successHandler.getUser();

        if (user == null
                || user.getUsername() == null
                || user.getProviderId() == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("OAuth2 user details are not available");
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            user.getUsername(),
                            user.getProviderId()
                    )
            );

            UserDetails userDetails =
                    userDetailsServiceImpl.loadUserByUsername(
                            user.getUsername()
                    );

            String jwt = jwtUtil.generateToken(
                    userDetails.getUsername()
            );

            return ResponseEntity.ok(jwt);

        } catch (AuthenticationException e) {
            log.warn("OAuth2 token authentication failed");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("OAuth2 authentication failed");

        } catch (Exception e) {
            log.error("OAuth2 token generation failed", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Unable to generate OAuth2 token");
        }
    }
}
