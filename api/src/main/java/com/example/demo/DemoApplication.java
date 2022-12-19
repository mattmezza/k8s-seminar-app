package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {
    Logger logger = LoggerFactory.getLogger(DemoApplication.class);
    private static final String TPL = "Hello, %s!";
    private static final String TPL_LOGGER = "Called '/hello' with name='%s'";

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @CrossOrigin(origins = "http://localhost:4200,http://k8s-seminar.local")
    @GetMapping("/hello")
    @ResponseBody
    ResponseEntity<?> hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        logger.info(String.format(TPL_LOGGER, name));
        return ResponseEntity.ok().body(String.format(TPL, name));
    }
}
