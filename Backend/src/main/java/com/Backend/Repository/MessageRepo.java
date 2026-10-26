package com.Backend.Repository;

import com.Backend.Entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<ContactMessage,Long> {
    ContactMessage findByMessageId(long messageId);
    void deleteByMessageId(long messageId);
}
