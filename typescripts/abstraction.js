"use strict";
// abstract class Payment {
//   constructor(protected amount: number) {}
//   abstract displayAmount(): void;
// }
// class GPayPayment extends Payment {
//   constructor(amount: number) {
//     super(amount);
//   }
//   displayAmount(): void {
//     console.log("Amount = ", this.amount);
//   }
// }
// const P = new GPayPayment(1234);
// P.displayAmount();
const message = "Hi, Welcome to club";
class Notifications {
}
class WhatsappNotification extends Notifications {
    send(message) {
        console.log("Whatsapp", message);
    }
}
class SmsNotification extends Notifications {
    send(message) {
        console.log("SMS", message);
    }
}
class TelegraNotification extends Notifications {
    send(message) {
        console.log("Telegram", message);
    }
}
class EmailNotification extends Notifications {
    send(message) {
        console.log("Email", message);
    }
}
// const wn = new WhatsappNotification()
// const sn = new SmsNotification()
// const tn = new TelegraNotification()
// const en = new EmailNotification()
const notificationServices = [
    new WhatsappNotification(),
    new SmsNotification(),
    new TelegraNotification(),
    new EmailNotification(),
];
notificationServices.forEach((notificationService) => {
    notificationService.send(message);
});
