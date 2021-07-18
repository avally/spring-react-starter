package org.avally.springreactstarter.repository;

import org.avally.springreactstarter.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Optional;

public interface UserRepository  extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameOrEmail(@NotBlank @Size(max = 20) String username,
                                         @NotBlank @Size(max = 50) @Email String email);

    Optional<User> findByEmail(String email);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
