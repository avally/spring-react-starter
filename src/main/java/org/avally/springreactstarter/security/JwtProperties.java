package org.avally.springreactstarter.security;

import lombok.Getter;
import lombok.Setter;

public class JwtProperties {
    //    @formatter:off
    /**
     * JWT secret
     */
    @Getter @Setter
    private String secret;
    @Getter @Setter
    private Long expirationInMs;
    @Getter @Setter
    private String header = "Authorization";
    //    formatter:on
}
