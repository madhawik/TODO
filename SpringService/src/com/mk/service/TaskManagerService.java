package com.mk.service;

import java.util.List;

import com.mk.model.Task;

public interface TaskManagerService {
	public void addTask(Task task);
	public void addTask(List<Task> tasks);
	
	public void archiveTask(String taskId);
	public void archiveTask(String[] taskIds);
	
	public void updateTask(Task task);
	public void updateTask(List<Task> tasks);

	public void changeTaskStatus(String taskId, String status);
	
	public List<Task> getAllTasks();
	
	public Task getTaskById(String taskId);
	
}
