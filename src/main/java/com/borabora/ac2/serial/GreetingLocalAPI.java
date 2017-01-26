package com.borabora.ac2.serial;

import com.borabora.ac2.model.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

/**
 * @author: mananoreboton
 */
@Component
public class GreetingLocalAPI {

    @Autowired
    SimpMessagingTemplate messagingTemplate;

    public void greeting(String content) throws Exception {
        messagingTemplate.convertAndSend("/topic/greetings", new Greeting(content.substring(0,5)+"°"));
    }
}
