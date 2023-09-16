package com.example.twitterservice;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * Alan's Test Cases
 */
@SpringBootTest
class TwitterServiceApplicationTests {

    @Autowired
    private TwitterController controller;

    @Test
    void contextLoads() {
        assertNotNull(controller);
    }

    @Test
    void happy_POSTTweet() {
        try {
            assertEquals(controller.tweet("Testing"), "200");
        }
        catch(Exception e) {
            throw new RuntimeException("Thrown");
        }
    }

    @Test
    void happy_DELETETweet() {
        try {
            assertEquals(controller.delete(0), "200");
        }
        catch(Exception e) {}
    }
}
