package cris.noroc.rest.dtos;

import jakarta.validation.constraints.NotBlank;

public class LoginRequestDto {
    
    @NotBlank
    private String userName;

    @NotBlank
    private String password;

    public String getUsername() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
