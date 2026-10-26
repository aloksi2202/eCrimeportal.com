package com.Backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class ContactMessage {
    @Id
    private long messageId;
    private String username;
    private String name;
    private String mobile;
    private String email;
    private String subject;
    private String message;
    private String company;
}
