package org.avally.springreactstarter;

import lombok.Getter;
import lombok.Setter;
import org.avally.springreactstarter.security.JwtProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;

@ConfigurationProperties("app")
public class ApplicationProperties {
    @Getter
    @Setter
    @NestedConfigurationProperty
    private JwtProperties jwt;
}
