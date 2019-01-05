package com.quanglinhit.jwtsecuity.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController{

    @GetMapping("/rest/hello")
    @CrossOrigin(origins = "*")
    public String hello(){
        return "Hello ca the gioi";
    }
}
