package com.example.twitterservice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import twitter4j.*;

    // Umang`s Spring Boot Controller

@Controller
public class TwitterController {

    @GetMapping("/")
    public ModelAndView home() {
        return new ModelAndView("index");
    }

    @PostMapping("/tweet")
    public ModelAndView tweet(@RequestParam String tweetText) throws TwitterException {

        //  Gerardo`s logic

        Twitter twitter = new TwitterFactory().getInstance();
        final TwitterV2 v2 = TwitterV2ExKt.getV2(twitter);
        final CreateTweetResponse createTweet = v2.createTweet(
                null,
                null, null, null, null, null, null,
                null, null, null, null, tweetText);
        ModelAndView modelAndView = new ModelAndView("index");
        modelAndView.addObject("tweetId", createTweet.getId());
        return modelAndView;
    }

    @PostMapping("/delete")
    public ModelAndView delete(@RequestParam long tweetIdToDelete) throws TwitterException {

        // Gerardo`s logic

        Twitter twitter = new TwitterFactory().getInstance();
        final TwitterV2 v2 = TwitterV2ExKt.getV2(twitter);
        final boolean deleteTweet = v2.deleteTweet(tweetIdToDelete).getResult();
        ModelAndView modelAndView = new ModelAndView("index");
        modelAndView.addObject("deleteResult", deleteTweet);
        return modelAndView;
    }
}
