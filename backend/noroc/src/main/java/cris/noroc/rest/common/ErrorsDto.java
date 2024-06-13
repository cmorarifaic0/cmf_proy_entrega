package cris.noroc.rest.common;

import java.util.List;

public class ErrorsDto {

    private String message;
    private List<FieldErrorDto> fieldErrors;

    public ErrorsDto(String message) {
        this.message = message;
    }

    public ErrorsDto(List<FieldErrorDto> fieldErrors) {
        this.fieldErrors = fieldErrors;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<FieldErrorDto> getFieldErrors() {
        return fieldErrors;
    }

    public void setFieldErrors(List<FieldErrorDto> fieldErrors) {
        this.fieldErrors = fieldErrors;
    }
}
