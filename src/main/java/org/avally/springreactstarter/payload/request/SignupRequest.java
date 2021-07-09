package org.avally.springreactstarter.payload.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

public class SignupRequest {
    //    @formatter:off
    @NotBlank @Size(min = 3, max = 20)
    @Getter @Setter
    private String username;

    @NotBlank @Size(max = 50) @Email
    @Getter @Setter
    private String email;

    @NotBlank @Size(min = 6, max = 40)
    @Getter @Setter
    private String password;

    @Getter @Setter
    private Set<String> roles;
    //    @formatter:on
}