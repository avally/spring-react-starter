package org.avally.springreactstarter.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class LoginRequest {
    //    @formatter:off
    @NotBlank @Email
    @Getter @Setter
    private String email;

    @NotBlank
    @Getter @Setter
    private String password;
    //    @formatter:on
}
