package com.Backend.Controller;

import com.Backend.Entity.ContactMessage;
import com.Backend.Repository.MessageRepo;
import com.Backend.Services.MessageServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageServices messageServices;


    @PostMapping("/save")
    public ResponseEntity<String> saveMessage(@RequestBody ContactMessage contactMessage){
        try {
            if (contactMessage!=null){
                Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
                String username= authentication.getName();
                contactMessage.setUsername(username);
                messageServices.saveMessage(contactMessage);
                return new ResponseEntity<>("saved", HttpStatus.OK);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new ResponseEntity<>("error",HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/get-all-message")
    public ResponseEntity<List<ContactMessage>> getAll(){
        return new ResponseEntity<>(messageServices.getAllMessages(),HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<ContactMessage> getByMessageId(@PathVariable long id){
        if (id<10000000){
            return new ResponseEntity<>(messageServices.getByMessageId(id),HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
}
