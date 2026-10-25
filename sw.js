// ClearDose - helper file ("service worker")
// Phones need this file before a website can show notifications.
// It doesn't need to do anything else.

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

// When a notification is tapped, open ClearDose
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow("./"));
});
