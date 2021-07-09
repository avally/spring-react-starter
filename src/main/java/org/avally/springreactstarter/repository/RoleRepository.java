package org.avally.springreactstarter.repository;

import org.avally.springreactstarter.model.ERole;
import org.avally.springreactstarter.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
