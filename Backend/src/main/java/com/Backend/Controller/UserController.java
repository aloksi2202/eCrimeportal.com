package com.Backend.Controller;

import com.Backend.Entity.Complaints;
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

@RestController()
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServices userServices;

    @GetMapping("/get-details")
    public ResponseEntity<User> getUser(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        User user=userServices.getByUsername(authentication.getName());
        if (user==null){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PutMapping("/update-details")
    public ResponseEntity<String> updateUser(@RequestBody User user){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username= authentication.getName();
        User old=userServices.getByUsername(username);
        if (user!=null){
            if (user!=old) {
                old.setId(old.getId());
                old.setUsername((user.getUsername()!=null && user.getUsername() != old.getUsername())? user.getName() : old.getUsername());
                old.setName((user.getName()!=null && user.getName() != old.getName())? user.getName() : old.getName());
                old.setDob((user.getDob()!=null && user.getDob() != old.getDob())? user.getDob() : old.getDob());
                old.setAddress((user.getAddress()!=null && user.getAddress() != old.getAddress())? user.getAddress() : old.getAddress());
                userServices.saveUser(old);
                return new ResponseEntity<>("Successfully updated", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/password-change")
    public ResponseEntity<String> changePassword(@RequestBody String password){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        User user=userServices.getByUsername(username);
        if (password!=null){
        userServices.changePassword(user,password);
        return new ResponseEntity<>("Password successfully changed",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete-profile")
    public ResponseEntity<User> deleteUser(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        User user=userServices.getByUsername(username);
        if (user==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userServices.deleteByUsername(username);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PostMapping("/register-complaint")
    public ResponseEntity<String> saveComplaint(@RequestBody Complaints complaints){
        if (complaints!=null){
            userServices.saveNewComplaint(complaints);
            return new ResponseEntity<>("saved", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/show-all")
    public ResponseEntity<List<Complaints>> getAllComplaints(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        List<Complaints> list=new ArrayList<>();
        for (Complaints x: userServices.getAllComplaints()){
            if (x.getUsername().equals(username)){
                list.add(x);
            }
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @GetMapping("/track-complaint-id/{complaintId}")
    public ResponseEntity<Complaints> getComplaintById(@PathVariable long complaintId) {
        return new ResponseEntity<>(userServices.getComplaintById(complaintId), HttpStatus.OK);
    }
}
