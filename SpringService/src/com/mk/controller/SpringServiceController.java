package com.mk.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mk.model.Task;
import com.mk.service.TaskManagerService;
import com.mk.service.impl.TaskManagerServiceImpl;

@RestController
@RequestMapping("service")
public class SpringServiceController {
	TaskManagerService taskManagerService = new TaskManagerServiceImpl();

	@RequestMapping(value = "/tasks", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Task> getAllTasks() {
		List<Task> tasks = taskManagerService.getAllTasks();
		return tasks;
	}
	@RequestMapping(value = "/archiveTask/{taskId}", method = RequestMethod.POST, headers = "Accept=application/json")
	public List<Task> archiveTask(@PathVariable String taskId){
		taskManagerService.archiveTask(taskId);
		return taskManagerService.getAllTasks();
	}
	@RequestMapping(value = "/addTask/{taskName}/{taskDescription}/{taskPriority}/{taskStatus}", method = RequestMethod.POST, headers = "Accept=application/json")
	public List<Task> addTask(@PathVariable String taskName,@PathVariable String taskDescription,@PathVariable String taskPriority,@PathVariable String taskStatus){
		Task task = new Task();
		task.setTaskName(taskName);
		task.setTaskDescription(taskDescription);
		task.setTaskPriority(taskPriority);
		task.setTaskStatus(taskStatus);
		taskManagerService.addTask(task);
		return taskManagerService.getAllTasks();
	}
	@RequestMapping(value = "/updateTask/{task}", method = RequestMethod.POST, headers = "Accept=application/json")
	public List<Task> updateTask(@PathVariable Task task){
		taskManagerService.updateTask(task);
		return taskManagerService.getAllTasks();
	}

	@RequestMapping(value = "/changeTaskStatus/{taskId}/{status}", method = RequestMethod.POST, headers = "Accept=application/json")
	public List<Task> changeTaskStatus(@PathVariable String taskId, @PathVariable String status){
		taskManagerService.changeTaskStatus(taskId, status);
		return taskManagerService.getAllTasks();
	}
	
	@RequestMapping(value = "/getTask/{taskId}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Task getTaskById(@PathVariable String taskId){
		Task task = taskManagerService.getTaskById(taskId);
		return task;		
	}
}
