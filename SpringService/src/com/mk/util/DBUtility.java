package com.mk.util;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.util.Properties;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class DBUtility {

	public static MongoDatabase getDatabase() {
		Properties prop = new Properties();
		InputStream inputStream = DBUtility.class.getClassLoader()
				.getResourceAsStream("config.properties");
		try {
			prop.load(inputStream);
		} catch (IOException e) {
			e.printStackTrace();
		}
		String port = prop.getProperty("port");
		String url = prop.getProperty("url");
		MongoClient mongo = new MongoClient(url, new Integer(port));
		MongoDatabase database = mongo.getDatabase("mkdb");
		return database;
	}

	public static void createTodoCollection(MongoDatabase database) {
		MongoCollection<Document> coll = database.getCollection("todo");
	}

}
