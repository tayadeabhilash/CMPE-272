package com.example.twitterservice;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
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
            assertNotNull(controller.tweet("Testing API POST"));
        }
        catch(Exception e) {
            throw new RuntimeException("Failed POST test");
        }
    }

    @Test
    void happy_DELETETweet() {
        try {
            assertNotNull(controller.delete(0));
        }
        catch(Exception e) {
            throw new RuntimeException("Failed DELETE test");
        }
    }
}
