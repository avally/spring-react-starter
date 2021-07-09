package org.avally.springreactstarter.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
    //    @formatter:off
    @NotBlank
    @Getter @Setter
    private String username;

    @NotBlank
    @Getter @Setter
    private String password;
    //    @formatter:on
}
