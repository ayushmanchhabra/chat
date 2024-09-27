CREATE TABLE IF NOT EXISTS Users (
    user TEXT NOT NULL,
    pswd TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Channel (
    uuid TEXT NOT NULL,
    users TEXT NOT NULL,
)

CREATE TABLE IF NOT EXISTS Messages (
    content TEXT NOT NULL,
    date_time DATETIME NOT NULL,
    sender TEXT NOT NULL,
    receiver TEXT NOT NULL,
);

