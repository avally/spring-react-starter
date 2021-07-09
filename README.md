# SpringBoot app template with JWT auth, MongoDB and ReactJS frontend

## Run in development
- bootstrap mongo and add default roles
  ```javascript
  db.roles.insertMany([
   { name: "ROLE_USER" },
   { name: "ROLE_MODERATOR" },
   { name: "ROLE_ADMIN" },
  ])
  ```
- specify DB connection properties in `application.properties` and run SpringBoot application with `SpringReactStarterApplication.main()` entry point