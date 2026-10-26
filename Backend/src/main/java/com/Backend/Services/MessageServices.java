package com.Backend.Services;

import com.Backend.Entity.Complaints;
import com.Backend.Entity.ContactMessage;
import com.Backend.Repository.ComplaintRepo;
import com.Backend.Repository.MessageRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServices {

    @Autowired
    private MessageRepo messageRepo;

    private static long messageCount=10000000;

    @PostConstruct
    public void updateCount(){
        for (ContactMessage i:getAllMessages()){
            messageCount=i.getMessageId()+1;
        }
    }

    public void saveMessage(ContactMessage contactMessage){
        contactMessage.setMessageId(messageCount);
        messageRepo.save(contactMessage);
        messageCount++;
    }

    public ContactMessage getByMessageId(long id){
        return messageRepo.findByMessageId(id);
    }

    public List<ContactMessage> getAllMessages(){
        return messageRepo.findAll();
    }
}
