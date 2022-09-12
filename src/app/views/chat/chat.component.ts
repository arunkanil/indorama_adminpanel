import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";

@Component({
  templateUrl: "chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent {
  constructor(
    public dataservice: DataService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  chatData: any = [];
  messageData: any = [];
  chatMembers: any = [];
  loading = true;
  messageLoading = false;
  btnLoading = false;
  pageSize = 10;
  count = 0;
  key = null;
  selectedList = "All Chats";
  listCheck = false;

  ngOnInit(): void {
    console.log(this.router);
    this.getallChats(this.pageSize, this.pageSize * this.count, this.key);
  }
  getallChats(limit?, start?, key?, isAskIndorama?) {
    console.log(limit, start);
    this.loading = true;
    this.dataservice
      .getallChats(limit, start, key, isAskIndorama)
      .valueChanges.subscribe((result: any) => {
        this.chatData = this.chatData.concat(result?.data?.chats.data);
        console.log("getallChats", this.chatData);
        this.loading = false;
      });
  }
  toggleChat(data) {
    if (data) {
      this.chatData = [];
      this.selectedList = "Ask Indorama";
      this.listCheck = data;
      this.getallChats(this.pageSize, 0, undefined, true);
    } else {
      this.chatData = [];
      this.selectedList = "All Chats";
      this.listCheck = data;
      this.getallChats(this.pageSize, 0, undefined, false);
    }
  }
  searchChats() {
    this.chatData = [];
    this.count = 0;
    this.getallChats(this.pageSize, 0, this.key, this.listCheck);
  }
  clearSearch() {
    this.chatData = [];
    this.count = 0;
    this.key = undefined;
    this.getallChats(this.pageSize, 0, undefined, this.listCheck);
  }
  loadMoreChats() {
    this.count++;
    this.getallChats(
      this.pageSize,
      this.pageSize * this.count,
      this.key,
      this.listCheck
    );
  }
  convertDate(data) {
    return new Date(data).toLocaleDateString();
  }
  convertTime(data) {
    return new Date(data).toLocaleTimeString();
  }
  onChange(event) {
    this.key = event.target.value;
    console.log(event.target.value);
  }
  getChatMessages(data) {
    this.messageLoading = true;
    this.chatMembers = data.attributes?.members?.data;
    console.log(this.chatMembers);

    this.dataservice
      .getChatMessages(data.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getChatMessages", result?.data?.chat?.data);
        this.messageData = result?.data?.chat.data;
        this.messageLoading = false;
      });
  }
}
