package com.Backend.Controller;


import com.Backend.Config.Passkey;
import com.Backend.Entity.Role;
import com.Backend.Entity.User;
import com.Backend.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {
    
    @Autowired
    private UserServices userServices;

    @PostMapping("/create-admin")
    public ResponseEntity<String> saveAdmin(@RequestBody User admin){
        userServices.updateCount();
        List<User> admins=userServices.getAll();
        for (User entity: admins){
            if (entity.getUsername().equals(admin.getUsername())){
                return new ResponseEntity<>("username already exists", HttpStatus.OK);
            }
            if (entity.getMobile().equals(admin.getMobile())){
                return new ResponseEntity<>("mobile no. already exists",HttpStatus.OK);
            }
            if (entity.getEmail().equals(admin.getEmail())){
                return new ResponseEntity<>("email already exists",HttpStatus.OK);
            }
        }
        if (admin!=null) {
            userServices.saveNewAdmin(admin);
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/create-new-police")
    public ResponseEntity<String> savePolice(@RequestBody User police){
        userServices.updateCount();
        List<User> policeList=userServices.getAll();
        for (User entity : policeList){
            if (entity.getUsername().equals(police.getUsername())){
                return new ResponseEntity<>("username already exists", HttpStatus.OK);
            }
            if (entity.getMobile().equals(police.getMobile())){
                return new ResponseEntity<>("mobile no. already exists",HttpStatus.OK);
            }
            if (entity.getEmail().equals(police.getEmail())){
                return new ResponseEntity<>("email already exists",HttpStatus.OK);
            }
        }
        if (police!=null) {
            userServices.saveNewPolice(police);
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }


    @GetMapping("/get-all-admins")
    public ResponseEntity<List<User>> getAll(){
        List<User> adminList = new ArrayList<>();
        for (User i:userServices.getAll()){
            if (i.getRole()== Role.ADMIN){
                adminList.add(i);
            }
        }
        if (adminList!=null) {
            return new ResponseEntity<>(adminList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get-user-details")
    public ResponseEntity<User> getUser(@RequestBody String username){
        User user=userServices.getByUsername(username);
        if (user==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @GetMapping("/get-all-users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> userList=new ArrayList<>();
        for (User i:userServices.getAll()){
            if (i.getRole()== Role.ADMIN){
                userList.add(i);
            }
        }
        if (userList!=null) {
            return new ResponseEntity<>(userList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/get-police-details")
    public ResponseEntity<User> getUser(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        User police=userServices.getByUsername(authentication.getName());
        if (police==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(police,HttpStatus.OK);
    }

    @GetMapping("/get-all-police")
    public ResponseEntity<List<User>> getAllPolice(){
        List<User> policeList=new ArrayList<>();
        for (User i:userServices.getAll()){
            if (i.getRole()== Role.ADMIN){
                policeList.add(i);
            }
        }
        if (policeList!=null) {
            return new ResponseEntity<>(policeList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/update-admin-details")
    public ResponseEntity<User> updateAdmin(@RequestBody User admin){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username= authentication.getName();
        User old=userServices.getByUsername(username);
        if (admin!=null){
            if (admin!=old) {
                admin.setId(old.getId());
                old.setUsername((admin.getUsername()!=null && admin.getUsername() != old.getUsername())? admin.getName() : old.getUsername());
                old.setName((admin.getName()!=null && admin.getName() != old.getName())? admin.getName() : old.getName());
                old.setDob((admin.getDob()!=null && admin.getDob() != old.getDob())? admin.getDob() : old.getDob());
                old.setAddress((admin.getAddress()!=null && admin.getAddress() != old.getAddress())? admin.getAddress() : old.getAddress());
                userServices.saveAdmin(old);
                return new ResponseEntity<>(admin, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/password-change")
    public ResponseEntity<String> changePassword(@RequestBody String password){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        User admin=userServices.getByUsername(username);
        if (password!=null){
            userServices.changePassword(admin,password);
            return new ResponseEntity<>("Password successfully changed",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("delete-admin")
    public ResponseEntity<String> deleteAdmin(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username= authentication.getName();
        User admin=userServices.getByUsername(username);
        if (admin!=null){
            userServices.deleteByUsername(username);
            return new ResponseEntity<>("Admin deleted",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete-all-data")
    public ResponseEntity<String> wipeAllData(@RequestBody String passkey){
        Passkey key=new Passkey();
        if (passkey.equals(key.getPasskey())){
            userServices.getAll();
            return new ResponseEntity<>("All Data Has Been Wiped",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete-user-profile")
    public ResponseEntity<String> deleteUser(@RequestBody String username){
        User user=userServices.getByUsername(username);
        if (user!=null){
            userServices.deleteByUsername(username);
            return new ResponseEntity<>("User deleted",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete-police-profile")
    public ResponseEntity<User> deletePolice(@RequestBody String username){
        User police=userServices.getByUsername(username);
        if (police==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userServices.deleteByUsername(username);
        return new ResponseEntity<>(police,HttpStatus.OK);
    }

}
