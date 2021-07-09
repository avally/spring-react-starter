package org.avally.springreactstarter.payload.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class JwtResponse {
    //    @formatter:off
    @Getter @Setter
    private String accessToken;

    @Getter @Setter
    private String tokenType = "Bearer";

    @Getter @Setter
    private String id;

    @Getter @Setter
    private String username;

    @Getter @Setter
    private String email;

    @Getter
    private List<String> roles;
    //    @formatter:on

    public JwtResponse(String accessToken, String id, String username, String email, List<String> roles) {
        this.accessToken = accessToken;
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }
}
