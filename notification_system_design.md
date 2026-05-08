# Notification System Design

## Overview

This project is a frontend notification system built using React. It allows users to create, view, mark as read, and delete notifications.

## Features

- Create notification with title, message, and type
- View notification list
- Mark notification as read
- Delete notification
- Show total, unread, and read counts
- Responsive layout for desktop and mobile

## Frontend

The frontend is inside the notification_app_fe folder.

Main files:

- src/App.js
- src/App.css

## Notification Flow

1. User enters title and message.
2. User selects notification type.
3. User clicks Add Notification.
4. Notification is shown in the list.
5. User can mark it as read or delete it.

## Logging Middleware

The logging middleware is inside the logging_middleware folder.

Function:

```js
Log(stack, level, packageName, message)
