package com.mk.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.bson.Document;
import org.bson.types.ObjectId;

import com.mk.model.Task;
import com.mk.service.TaskManagerService;
import com.mk.util.DBUtility;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;

public class TaskManagerServiceImpl implements TaskManagerService {
	private MongoDatabase database;

	public TaskManagerServiceImpl() {
		database = DBUtility.getDatabase();
	}

	@Override
	public void addTask(Task task) {
		if (database != null) {
			MongoCollection<Document> collection = database
					.getCollection("todo");

			Document document = new Document("taskName", task.getTaskName())
					.append("taskDescription", task.getTaskDescription())
					.append("taskPriority", task.getTaskPriority())
					.append("taskStatus", task.getTaskStatus())
					.append("taskArcived", false);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String currentTime = sdf.format(new Date());
			document.append("taskStartTime", currentTime).append("taskEndTime",
					currentTime);
			collection.insertOne(document);
		}

	}

	@Override
	public void addTask(List<Task> tasks) {
		// TODO Auto-generated method stub

	}

	@Override
	public void archiveTask(String taskId) {
		if (database != null) {
			MongoCollection<Document> collection = database
					.getCollection("todo");
			collection.updateOne(Filters.eq("_id", new ObjectId(taskId)),
					Updates.set("taskArcived", true));

		}
	}

	@Override
	public void archiveTask(String[] taskIds) {
		// TODO Auto-generated method stub

	}

	@Override
	public void updateTask(Task task) {
		// TODO Auto-generated method stub

	}

	@Override
	public void updateTask(List<Task> tasks) {
		// TODO Auto-generated method stub

	}

	@Override
	public void changeTaskStatus(String taskId, String status) {
		if (database != null) {
			MongoCollection<Document> collection = database
					.getCollection("todo");
			collection.updateOne(Filters.eq("_id", new ObjectId(taskId)),
					Updates.set("taskStatus", status));

		}

	}

	@Override
	public List<Task> getAllTasks() {
		List<Task> tasks = new ArrayList<Task>();
		if (database != null) {
			MongoCollection<Document> collection = database
					.getCollection("todo");
			FindIterable<Document> iterDoc = collection.find(Filters.eq(
					"taskArcived", false));
			Iterator<Document> it = iterDoc.iterator();
			while (it.hasNext()) {
				Document doc = it.next();
				Task task = new Task();
				task.setTaskId(doc.getObjectId("_id").toHexString());
				task.setTaskName(doc.getString("taskName"));
				task.setTaskDescription(doc.getString("taskDescription"));
				task.setTaskPriority(doc.getString("taskPriority"));
				task.setTaskStatus(doc.getString("taskStatus"));
				tasks.add(task);
			}
		}
		return tasks;
	}

	@Override
	public Task getTaskById(String taskId) {
		// TODO Auto-generated method stub
		return null;
	}

}
