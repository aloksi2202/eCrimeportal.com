package com.Backend.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    private int id;
    private String username;
    private String name;
    private String password;
    private String mobile;
    private String email;
    private LocalDate dob;
    private String address;
    private Role role;
    private String providerId;
    private String providerType;
}
