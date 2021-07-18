package org.avally.springreactstarter.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
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

    @JsonIgnore
    @NotBlank @Size(max = 120)
    @Getter @Setter
    private String password;

    @Getter @Setter
    private Role role;

    @Getter @Setter
    private Status status;
    //    @formatter:on


    public User(String username, String email, String password, Role role, Status status) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
    }
}
