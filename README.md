# TODO App using Spring MVC 4.0 Restful web services, Angular 4 and Mongo DB

### Prerequisites
Mongo DB, Eclipse J2EE, Tomcat Server v7.0

1. Install Mongodb
create a new database 'mkdb'

2. install Typescript Plug-in eclipse

3. Server project setup
import SpringService project in eclipse.
Run SpringService application on tomcat server. It will run at 8080 port.
check REST controller URL using Chrome poster plug-in.

http://localhost:8080/SpringService/service/tasks
http://localhost:8080/SpringService/service/archiveTask/{taskId}
http://localhost:8080/SpringService/service/addTask/{taskName}/{taskDescription}/{taskPriority}/{taskStatus}
http://localhost:8080/SpringService/service/changeTaskStatus/{taskId}/{status}

 
4. Client Project setup
import AngularClient project in eclipse.
Open the command prompt and go to the workspace directory 'AngularClient'
execute command `npm install`
run command `npm start` or `ng server --proxy-config proxy.conf.json`

5. Client-Server Integration
Both server and client projects are working independently on ports 8080 and 4200 respectively. 
The client server at 4200 will proxy any “/service/” requests to the “backend” server at “localhost: 8080/SpringService/”

Just to make sure everything is flowing well, trying accessing the following URLS using your web browser
1. http://localhost:4200/ - The contents will be delivered from “AngularClient” project.

2. http://localhost:4200/service/tasks - The contents will be delivered from “SpringService” project running at localhost:8080.


###Build
Run ng build to build the AngularClient project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

###Running unit test
Run ng test to execute the unit tests via Karma.
