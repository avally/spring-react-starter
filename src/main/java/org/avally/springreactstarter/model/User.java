package org.avally.springreactstarter.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "users")
public class User {
    //    @formatter:off
    @Id
    @Getter @Setter
    private String id;

    @NotBlank @Size(max = 20)
    @Getter @Setter
    private String username;

    @NotBlank @Size(max = 50) @Email
    @Getter @Setter
    private String email;

    @NotBlank @Size(max = 120)
    @Getter @Setter
    private String password;

    @DBRef
    @Getter @Setter
    private Set<Role> roles = new HashSet<>();
    //    @formatter:on

    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
