import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:Course[];
  constructor() {
    var c=new Course();
    c.id="fs-2024-02";
    c.name="Fullstack Developer Program"
    c.start="27-03-2024";
    c.end="31-08-2024";
    c.active=true;
    c.flagship=true;
    c.method='Hybrid';
    c.schedule=18;
    c.duration=200;
    c.description=`Fullstack developer prepares student to write 
    enterprise grade applications using Java, Spring framework and Angular frontend.
    It will teach students full lifecycle development skills in agile environment. 
    Students  will be able to face interviews with multi national compnaies and will be able
    to compete with experienced developers in this area. `;
    c.content=["Java 14","Postgres 8.1","Angular 17","HTML, CSS, JavaScript","Azure cloud","Agile Scrum","Azure Repos","Azure Devops"]

    var c1=new Course();
    c1.id="dsa-java-2024-02";
    c1.name="Data Structure and Algorithms with Java"
    c1.start="27-03-2024";
    c1.end="30-06-2024";
    c1.active=true;
    c1.flagship=true;
    c1.method='Hybrid';
    c1.schedule=9;
    c1.duration=100;
    c1.description=`Data Structure and Algorithms with Java program prepares students and college graduates
      for advanced programming skills demanded by top software companies. This course
      introduces students to different data structures, choosing a data structure to
      solve a given problem. This course will cover core algotrithms used in manipulating
      data structures, sort and search data.`;
    c1.content=["Java 14","Collections","Arrays, Lists & Strings","Stacks and Queues","Linked Lists","Hashing","Maps and Dirctories","Sorting","Searching"]

    var c2=new Course();
    c2.id="dsa-python-2024-02";
    c2.name="Data Structure and Algorithms with Python"
    c2.start="27-03-2024";
    c2.end="30-06-2024";
    c2.active=true;
    c2.flagship=true;
    c2.method='Hybrid';
    c2.schedule=9;
    c2.duration=100;
    c2.description=
      `
      Data Structure and Algorithms with Java program prepares students and college graduates
      for advanced programming skills demanded by top software companies. This course
      introduces students to different data structures, choosing a data structure to
      solve a given problem. This course will cover core algotrithms used in manipulating
      data structures, sort and search data.
      `
    c2.content=["Python","Lists and Strings","Sets and Tuples","Stacks and Queues","Linked Lists","Hashing","Maps and Dirctories","Sorting","Searching"]

    var c3=new Course();
    c3.id="ml-python-2024-02";
    c3.name="Machine Learning with Python"
    c3.start="27-03-2024";
    c3.end="30-06-2024";
    c3.active=true;
    c3.flagship=true;
    c3.method='Hybrid';
    c3.schedule=12;
    c3.duration=120;
    c3.description=
      `
      Machine Learning with Python program prepares students and college graduates
      for advanced AI/ML skills demanded by top software companies. This course
      introduces students to concepts of AI and ML, different Machine Learning
      algorithms and lifecycle of Machine learning projects. This course will teach 
      students on how to design a machine learning model, cleanse and prep data,
      training, testing and deploying machine learning models in production like environments
      `
    c3.content=["Python","Statics and Probability","Machine learning basics","Python ML - NumPy, PyTorch, MatplotLib, SciPy, Tensorflow","Model design","Anomly Detection","Regression","Random Forrest","Nearest Neighbors","Naive Bayes"]

    this.courses=[c,
      c1,
      c3,
      c2
    ];
    console.log(this.courses);
   }

  ngOnInit(): void 
  {
    //this.courses=[];
  }

}
