package ru.micro.start.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.micro.start.shop.model.VisitTask;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VisitTaskRequest {

    private ShopRequest shop;
    private String description;
    private Date deadline;

    public VisitTask toVisitTask(){
        VisitTask task = new VisitTask();
        task.setShop(this.shop.toShop());
        task.setDeadline(this.deadline);
        task.setDescription(this.description);
        return task;
    }
}
