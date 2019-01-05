package com.quanglinhit.jwtsecuity.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/none")
public class NoneTokenController {
    public class HelloController {

        @GetMapping
        public String none(){
            return "None token";
        }
    }

}
