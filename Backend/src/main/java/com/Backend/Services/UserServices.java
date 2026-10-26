package com.Backend.Services;


import com.Backend.Entity.*;
import com.Backend.Repository.ComplaintRepo;
import com.Backend.Repository.UserRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class UserServices {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ComplaintRepo complaintRepo;

    private static final PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
    private static int adminCount=1000;
    private static int policeCount=10000;
    private static int userCount=100000;
    private static long complaintCount=100000000;

    @PostConstruct
    public void updateCount(){
        for (User i : getAll()){
            if (i.getRole()==Role.POLICE) {
                policeCount = i.getId() + 1;
            }
            if (i.getRole()==Role.USER) {
                userCount = i.getId() + 1;
            }
            if (i.getRole()==Role.ADMIN){
                adminCount=i.getId()+1;
            }

        }
        for (Complaints i:getAllComplaints()){
            complaintCount=i.getComplaintId()+1;
        }
    }

    //Admin services methods
    public void saveNewAdmin(User admin){
        admin.setId(adminCount);
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole(Role.ADMIN);
        userRepo.save(admin);
        adminCount++;
    }

    public void saveAdmin(User admin){
        admin.setRole(Role.ADMIN);
        userRepo.save(admin);
    }

    //Police services methods
    public void saveNewPolice(User police){
        police.setId(policeCount);
        police.setPassword(passwordEncoder.encode(police.getPassword()));
        police.setRole(Role.POLICE);
        userRepo.save(police);
        policeCount++;
    }

    public void savePolice(User police){
        police.setRole(Role.USER);
        userRepo.save(police);
    }

    public void saveNewUser(User user){
        user.setId(userCount);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        userRepo.save(user);
        userCount++;
    }

    //User service methods
    public void saveUser(User user){
        user.setRole(Role.USER);
        userRepo.save(user);
    }

    public List<User> getAll(){
        return userRepo.findAll();
    }


    //general used methods
    public User getByUsername(String username){
        return userRepo.findByUsername(username);
    }

    @Transactional
    public void deleteByUsername(String username){
        userRepo.deleteByUsername(username);
    }

    public void changePassword(User user, String password) {
        user.setPassword(passwordEncoder.encode(password));
        userRepo.save(user);
    }

    public boolean userExistCheck(String email){
        List<User> list=getAll();
        for (User i:list){
            if (Objects.equals(i.getEmail(),email)){
                return true;
            }
        }
        return false;
    }

    public void saveNewComplaint(Complaints complaints){
        complaints.setComplaintId(complaintCount);
        complaints.setStatus(Status.REGISTERED);
        complaintRepo.save(complaints);
        complaintCount++;
    }

    public void saveComplaint(Complaints complaints){
        complaintRepo.save(complaints);
    }

    public List<Complaints> getAllComplaints(){
        return complaintRepo.findAll();
    }

    public Complaints getComplaintById(long complaintId){
        return complaintRepo.findByComplaintId(complaintId);
    }

    public void deleteComplaintById(long complaintId){
         complaintRepo.deleteByComplaintId(complaintId);
    }

}
