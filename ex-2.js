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
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}
const emailNotification = new EmailNotification(
  "123",
  "2023-01-01",
  "Hello, this is an email!",
  "example@email.com"
);
emailNotification.send();

const smsNotification = new SMSNotification(
  "456",
  "2023-01-02",
  "Hello, this is an SMS!",
  "123456789"
);
smsNotification.send();
