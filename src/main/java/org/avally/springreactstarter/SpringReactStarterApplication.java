package org.avally.springreactstarter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(ApplicationProperties.class)
public class SpringReactStarterApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringReactStarterApplication.class, args);
    }

}
