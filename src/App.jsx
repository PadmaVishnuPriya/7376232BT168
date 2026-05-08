import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("Info");
  const [notifications, setNotifications] = useState([]);

  function addNotification(e) {
    e.preventDefault();

    if (title.trim() === "" || message.trim() === "") {
      alert("Please enter title and message");
      return;
    }

    const newNotification = {
      id: Date.now(),
      title: title,
      message: message,
      type: type,
      isRead: false,
    };

    setNotifications([newNotification, ...notifications]);
    setTitle("");
    setMessage("");
    setType("Info");
  }

  function markAsRead(id) {
    const updatedList = notifications.map((item) => {
      if (item.id === id) {
        return { ...item, isRead: true };
      }
      return item;
    });

    setNotifications(updatedList);
  }

  function deleteNotification(id) {
    const filteredList = notifications.filter((item) => item.id !== id);
    setNotifications(filteredList);
  }

  const totalCount = notifications.length;
  const unreadCount = notifications.filter((item) => !item.isRead).length;
  const readCount = notifications.filter((item) => item.isRead).length;

  return (
    <div className="app">
      <header className="header">
        <h1>Notification System</h1>
        <p>Manage and track user notifications in one place</p>
      </header>

      <section className="stats">
        <div className="stat-card">
          <h2>{totalCount}</h2>
          <p>Total</p>
        </div>

        <div className="stat-card">
          <h2>{unreadCount}</h2>
          <p>Unread</p>
        </div>

        <div className="stat-card">
          <h2>{readCount}</h2>
          <p>Read</p>
        </div>
      </section>

      <main className="main-content">
        <form className="notification-form" onSubmit={addNotification}>
          <h2>Create Notification</h2>

          <label>Title</label>
          <input
            type="text"
            placeholder="Enter notification title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Message</label>
          <textarea
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Info</option>
            <option>Success</option>
            <option>Warning</option>
            <option>Error</option>
          </select>

          <button type="submit">Add Notification</button>
        </form>

        <section className="notification-list">
          <h2>Notifications</h2>

          {notifications.length === 0 ? (
            <p className="empty-text">No notifications added yet.</p>
          ) : (
            notifications.map((item) => (
              <div
                className={`notification-card ${item.type.toLowerCase()} ${
                  item.isRead ? "read" : ""
                }`}
                key={item.id}
              >
                <div className="card-top">
                  <span className="badge">{item.type}</span>
                  <span className="status">
                    {item.isRead ? "Read" : "Unread"}
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.message}</p>

                <div className="card-actions">
                  {!item.isRead && (
                    <button onClick={() => markAsRead(item.id)}>
                      Mark as Read
                    </button>
                  )}
                  <button
                    className="delete-btn"
                    onClick={() => deleteNotification(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
