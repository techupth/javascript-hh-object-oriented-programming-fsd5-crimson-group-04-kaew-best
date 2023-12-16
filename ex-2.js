class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content);
    this.receiver = receiver;
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content);
    this.receiver = receiver;
  }
}
const receiverEmail = new EmailNotification("1", "10.0", "email", "Kaew");
const myPhone = new SMSNotification("1", "10.0", "email", "0805086115");

receiverEmail.send();
myPhone.send();
