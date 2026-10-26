package com.Backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
public class Complaints {
    @Id
    private Long complaintId;
    private String username;
    private String fullName;
    private String mobile;
    private String email;
    private String address;
    private String aadharNumber;
    private String category;
    private String location;
    private LocalDate date;
    private LocalTime time;
    private String description;
    private Status status;
    private String assignedOfficer;
    private String remark;
}
