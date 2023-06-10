package ru.micro.start.userservice.excepion;

import org.springframework.http.HttpStatus;

public class NoContentException extends Exception {
    private final HttpStatus status;

    public NoContentException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
