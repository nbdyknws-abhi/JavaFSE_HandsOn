package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public country getCountryIndia() {
        LOGGER.info("Start getCountryIndia()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        country country = (country) context.getBean("country", country.class);
        LOGGER.info("End getCountryIndia()");
        return country;
    }
}
