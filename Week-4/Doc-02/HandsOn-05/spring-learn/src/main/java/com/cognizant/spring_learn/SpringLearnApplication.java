package com.cognizant.spring_learn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

//	public static void displayDate() {
//	    ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
//	    SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
//	    try {
//	        Date date = format.parse("31/12/2018");
//	        System.out.println(date);
//	        LOGGER.info("Parsed Date: {}", date);
//	    } catch (ParseException e) {
//	        LOGGER.error("Date parsing failed", e);
//	    }
//	}
	public static void displayCountry() {
	    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
	    country country = context.getBean("country",country.class);
	    
	    LOGGER.debug("Country : {}", country.toString());
	}

	public static void main(String[] args) {
	    SpringApplication.run(SpringLearnApplication.class, args);
	    LOGGER.info("Inside main");
//	    displayDate();
	    displayCountry();
	}


}

