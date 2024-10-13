package com.student_registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student_registration.Student;
import com.student_registration.service.StudentService;

@RestController
@RequestMapping("api/v1/student")
public class StudentController {
	
	@Autowired
	private StudentService studentService;

	@PostMapping("/save")
	public Student saveStudent(@RequestBody Student student) {
		return studentService.saveStudent(student);
	}
	
}
