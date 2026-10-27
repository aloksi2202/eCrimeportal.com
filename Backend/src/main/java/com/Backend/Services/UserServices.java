
package com.Backend.Services;

import com.Backend.Entity.*;
import com.Backend.Repository.ComplaintRepo;
import com.Backend.Repository.UserRepo;

import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private PasswordEncoder passwordEncoder;

    private int adminCount = 1000;
    private int policeCount = 10000;
    private int userCount = 100000;
    private long complaintCount = 100000000;

    @PostConstruct
    public void updateCount() {
        for (User user : userRepo.findAll()) {
            if (user.getRole() == Role.ADMIN) {
                adminCount = Math.max(adminCount, user.getId() + 1);
            } else if (user.getRole() == Role.POLICE) {
                policeCount = Math.max(policeCount, user.getId() + 1);
            } else if (user.getRole() == Role.USER) {
                userCount = Math.max(userCount, user.getId() + 1);
            }
        }

        for (Complaints complaint : complaintRepo.findAll()) {
            complaintCount = Math.max(
                    complaintCount,
                    complaint.getComplaintId() + 1
            );
        }
    }

    // Admin registration
    public void saveNewAdmin(User admin) {
        admin.setId(adminCount++);
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole(Role.ADMIN);
        userRepo.save(admin);
    }

    public void saveAdmin(User admin) {
        admin.setRole(Role.ADMIN);
        userRepo.save(admin);
    }

    // Police registration
    public void saveNewPolice(User police) {
        police.setId(policeCount++);
        police.setPassword(passwordEncoder.encode(police.getPassword()));
        police.setRole(Role.POLICE);
        userRepo.save(police);
    }

    public void savePolice(User police) {
        police.setRole(Role.POLICE);
        userRepo.save(police);
    }

    // New user registration
    public void saveNewUser(User user) {
        if (user == null
                || user.getUsername() == null
                || user.getUsername().isBlank()
                || user.getPassword() == null
                || user.getPassword().isBlank()) {
            throw new IllegalArgumentException(
                    "Username and password are required"
            );
        }

        user.setUsername(user.getUsername().trim());
        user.setId(userCount++);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);

        userRepo.save(user);
    }

    // Update existing user without changing their password
    public void saveUser(User user) {
        userRepo.save(user);
    }

    // Find user
    public User getByUsername(String username) {
        if (username == null || username.isBlank()) {
            return null;
        }

        return userRepo.findByUsername(username.trim());
    }

    public List<User> getAll() {
        return userRepo.findAll();
    }

    public boolean userExistCheck(String email) {
        if (email == null || email.isBlank()) {
            return false;
        }

        return userRepo.findAll().stream()
                .anyMatch(user ->
                        user.getEmail() != null
                        && user.getEmail().equalsIgnoreCase(email.trim())
                );
    }

    // Change password
    public void changePassword(User user, String password) {
        if (user == null || password == null || password.isBlank()) {
            throw new IllegalArgumentException(
                    "User and new password are required"
            );
        }

        user.setPassword(passwordEncoder.encode(password));
        userRepo.save(user);
    }

    // Delete user
    @Transactional
    public void deleteByUsername(String username) {
        userRepo.deleteByUsername(username);
    }

    // Complaint operations
    public void saveNewComplaint(Complaints complaints) {
        complaints.setComplaintId(complaintCount++);
        complaints.setStatus(Status.REGISTERED);
        complaintRepo.save(complaints);
    }

    public void saveComplaint(Complaints complaints) {
        complaintRepo.save(complaints);
    }

    public List<Complaints> getAllComplaints() {
        return complaintRepo.findAll();
    }

    public Complaints getComplaintById(long complaintId) {
        return complaintRepo.findByComplaintId(complaintId);
    }

    public void deleteComplaintById(long complaintId) {
        complaintRepo.deleteByComplaintId(complaintId);
    }
}
