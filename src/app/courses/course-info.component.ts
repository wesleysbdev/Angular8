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
        this.listCourse();
    }

    listCourse(): void {
        this.courseService.retrieveById(+this.activedRoute.snapshot.paramMap.get('id')).subscribe({
            next: success => {
                this.course = success;
            },
            error: err => console.log('Error', err)
        })
    }

    public save(): void {
        this.courseService.save(this.course).subscribe({
            next: success => {
                console.log('Saved with success', success)
            },
            error: err => console.log('Error', err)
        });
    }
}