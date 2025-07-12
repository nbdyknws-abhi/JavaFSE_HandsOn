package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    public country getCountry(String code) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        country country = context.getBean("country", country.class);

        if (country.getCode().equalsIgnoreCase(code)) {
            return country;
        } else {
            return null; // or throw exception (optional)
        }
    }
}
