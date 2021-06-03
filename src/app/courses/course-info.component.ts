import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private activedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit() {
        this.course = this.courseService.retrieveById(+this.activedRoute.snapshot.paramMap.get('id'));
    }

    public save(): void {
        this.courseService.save(this.course);
    }
}