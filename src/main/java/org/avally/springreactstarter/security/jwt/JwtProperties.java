package org.avally.springreactstarter.security.jwt;

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
    private int expirationInMs;
    //    formatter:on
}
