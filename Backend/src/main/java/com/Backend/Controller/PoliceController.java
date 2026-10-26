package com.Backend.Controller;

import com.Backend.Entity.Complaints;
import com.Backend.Entity.Status;
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
@RequestMapping("/police")
public class PoliceController {

    @Autowired
    private UserServices policeServices;


    @PutMapping("/update-police-details")
    public ResponseEntity<String> updateUser(@RequestBody User police){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username= authentication.getName();
        User old=policeServices.getByUsername(username);
        if (police!=null){
            if (police!=old) {
                police.setId(old.getId());
                old.setUsername((police.getUsername()!=null && police.getUsername() != old.getUsername())? police.getName() : old.getUsername());
                old.setName((police.getName()!=null && police.getName() != old.getName())? police.getName() : old.getName());
                old.setDob((police.getDob()!=null && police.getDob() != old.getDob())? police.getDob() : old.getDob());
                old.setAddress((police.getAddress()!=null && police.getAddress() != old.getAddress())? police.getAddress() : old.getAddress());
                policeServices.savePolice(old);
                return new ResponseEntity<>("Successfully updated", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/password-change")
    public ResponseEntity<String> changePassword(@RequestBody String password){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        User police=policeServices.getByUsername(username);
        if (password!=null){
            policeServices.changePassword(police,password);
            return new ResponseEntity<>("Password successfully changed",HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete-police-profile")
    public ResponseEntity<User> deleteUser(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        User police=policeServices.getByUsername(username);
        if (police==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        policeServices.deleteByUsername(username);
        return new ResponseEntity<>(police,HttpStatus.OK);
    }

    @GetMapping("/show-assigned-case")
    public ResponseEntity<List<Complaints>> getAllComplaints(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        List<Complaints> list=new ArrayList<>();
        for (Complaints x: policeServices.getAllComplaints()){
            if (x.getAssignedOfficer().equals(username)){
                list.add(x);
            }
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @GetMapping("/show-assigned-closed-case")
    public ResponseEntity<List<Complaints>> getAllCLosedComplaints(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        List<Complaints> list=new ArrayList<>();
        for (Complaints x: policeServices.getAllComplaints()){
            if (x.getAssignedOfficer().equals(username) && x.getStatus().equals(Status.SOLVED)){
                list.add(x);
            }
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @PutMapping("/update-case-staus/{complaintId}")
    public ResponseEntity<String> updateStatus(@RequestBody Status status,@RequestBody String remark,@PathVariable int complaintId){
        Complaints old=policeServices.getComplaintById(complaintId);
        if (old.getStatus()!=status){
            old.setStatus(status);
            old.setRemark(remark);
        }
        policeServices.saveComplaint(old);
        return new ResponseEntity<>("Successfully Updated",HttpStatus.OK);
    }

}
