import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    private courses: Array<Course>;
    private filterBy: string;

    public filteredCourses: Array<Course>;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: success => {
                this.courses = success;
                this.filteredCourses = this.courses;
            },
            error: err => console.log('Error', err)
        });
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Delete with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string) {
        this.filterBy = value;
        this.filteredCourses = this.courses.filter((course: Course) => course.name.toLowerCase().indexOf(this.filterBy.toLowerCase()) > -1);
    }

    get filter() {
        return this.filterBy;
    }

}