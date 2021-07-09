package org.avally.springreactstarter.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "roles")
public class Role {
    //    @formatter:off
    @Id
    @Getter @Setter
    private String id;

    @Getter @Setter
    private ERole name;
    //    @formatter:on

    public Role() {
    }

    public Role(ERole name) {
        this.name = name;
    }
}
