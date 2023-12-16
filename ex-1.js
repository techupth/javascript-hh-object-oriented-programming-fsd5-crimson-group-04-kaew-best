class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = creaedTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log("Notification has been sent to <email>");
  }
}

class SMSNotification {}
