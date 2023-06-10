package ru.micro.start.shop.model;

public enum Status {
    CREATED("Создан"),
    CANCELED("Отменен"),
    IN_PROGRESS("В работе"),
    ON_REVIEW("На проверке"),
    VERIFIED("Проверен"),
    COMPENSATED("Оплачено"),
    CLOSED("Закрыт");
    private final String code;

    Status(String code){
        this.code = code;
    }
    public String getCode(){ return code;}
}
