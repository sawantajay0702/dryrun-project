FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY /target/student-registration-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
ENTRYPOINT [ "java","-jar","student-registration-0.0.1-SNAPSHOT.jar" ]