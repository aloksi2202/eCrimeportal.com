package com.Backend.Controller;


import com.Backend.Config.Oauth2SuccessHandler;
import com.Backend.Entity.User;
import com.Backend.Services.UserDetailsServiceImpl;
import com.Backend.Services.UserServices;
import com.Backend.Utiles.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

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

    @PostMapping("/sign-up")
    public ResponseEntity<String> signUp(@RequestBody User user){
        userServices.updateCount();
        if (user!=null) {
            userServices.saveNewUser(user);
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/log-in")
    public ResponseEntity<String> login(@RequestBody User user) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
            UserDetails userDetails= userDetailsServiceImpl.loadUserByUsername(user.getUsername());
            String jwt=jwtUtil.generateToken(userDetails.getUsername());
            return new ResponseEntity<>(jwt,HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>("username and password not match",HttpStatus.OK);

        }
    }

    @PostMapping("/check-username")
    public ResponseEntity<String> checkUsername(@RequestBody String username) {
        List<User> userList=userServices.getAll();
        for (User entity : userList) {
            if (Objects.equals(entity.getUsername(), username)) {
                return new ResponseEntity<>("Username already exists", HttpStatus.OK);
            }
            if (username.isEmpty()){
                return new ResponseEntity<>("", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("ok",HttpStatus.OK);
    }

    @PostMapping("/check-mobile")
    public ResponseEntity<String> checkMobile(@RequestBody String mobile) {
        List<User> userList=userServices.getAll();
        for (User entity : userList) {
            if (Objects.equals(entity.getMobile(), mobile)) {
                return new ResponseEntity<>("Mobile no. already exists", HttpStatus.OK);
            }
            if (mobile.isEmpty()){
                return new ResponseEntity<>("", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("ok",HttpStatus.OK);
    }

    @PostMapping("/check-email")
    public ResponseEntity<String> checkEmail(@RequestBody String email) {
        List<User> userList=userServices.getAll();
        for (User entity : userList) {
            if (Objects.equals(entity.getEmail(), email)) {
                return new ResponseEntity<>("Email already exists", HttpStatus.OK);
            }
            if (email.isEmpty()){
                return new ResponseEntity<>("", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("ok",HttpStatus.OK);
    }

    @GetMapping("/oauth2/login/token-generate")
    public ResponseEntity<String> oauth2Login(){
        User user=successHandler.getUser();
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(),user.getProviderId()));
            UserDetails userDetails= userDetailsServiceImpl.loadUserByUsername(user.getUsername());
            String jwt=jwtUtil.generateToken(userDetails.getUsername());
            return new ResponseEntity<>(jwt,HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>("username and password not match",HttpStatus.BAD_REQUEST);

        }
    }

}
