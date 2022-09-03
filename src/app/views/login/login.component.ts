import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { first } from "rxjs/operators";
import { DataService } from "../../data.service";
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent {
  @ViewChild("usForm") usForm: NgForm;

  loginForm: any = {};
  result: any = {};
  returnUrl: string;
  error = "";
  loading = false;

  constructor(
    public dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  onSubmit() {
    this.loginForm = this.usForm.value;
    console.log(this.loginForm);
    this.loading = true;
    this.router.navigate(["/dashboard"]);
    this.toastr.success("Login successful");
    this.authenticationService
      .login(this.loginForm)
      .pipe(first())
      .subscribe(
        (data) => {
          this.loading = false;
          this.router.navigate([this.returnUrl]);
          this.toastr.success("Login successful");
        },
        (error) => {
          this.error = error;
          this.loading = false;
          console.log(error.error.message[0].messages[0].message);
          this.toastr.error("Error",error.error.message[0].messages[0].message);
        }
      );
  }
}
