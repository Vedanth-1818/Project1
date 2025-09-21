from fastapi import FastAPI, HTTPException
from fastapi.responses import PlainTextResponse, RedirectResponse
from pydantic import BaseModel
import sqlite3
from typing import List
import os

app = FastAPI(title="Project1 Backend", version="0.2.0")

SUPPORT_EMAIL = "vvedanth72@gmail.com"
DB_PATH = os.path.join(os.path.dirname(__file__), "data.db")


def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            accommodation_id INTEGER,
            accommodation_name TEXT,
            check_in TEXT,
            check_out TEXT,
            guests INTEGER,
            room_type TEXT,
            total_price REAL,
            booking_date TEXT
        )
        """
    )
    conn.commit()
    conn.close()


class BookingIn(BaseModel):
    name: str
    email: str
    phone: str
    accommodationId: int | None = None
    accommodationName: str | None = None
    checkIn: str | None = None
    checkOut: str | None = None
    guests: int | None = 1
    roomType: str | None = "standard"
    totalPrice: float | None = 0.0


class BookingOut(BookingIn):
    id: int
    bookingDate: str


@app.on_event("startup")
def on_startup():
    init_db()


@app.get("/", tags=["general"])
def read_root():
    return {"message": "Backend is running"}


@app.get("/health", response_class=PlainTextResponse, tags=["general"])
def health():
    return "OK"


@app.get("/support", tags=["support"])
def support():
    return {"email": SUPPORT_EMAIL}


@app.get("/contact", tags=["support"])
def contact():
    """Redirects to a mailto: link for the support email."""
    return RedirectResponse(url=f"mailto:{SUPPORT_EMAIL}")


@app.post("/bookings", response_model=BookingOut, tags=["bookings"])
def create_booking(b: BookingIn):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        """
        INSERT INTO bookings (name, email, phone, accommodation_id, accommodation_name, check_in, check_out, guests, room_type, total_price, booking_date)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
        """,
        (
            b.name,
            b.email,
            b.phone,
            b.accommodationId,
            b.accommodationName,
            b.checkIn,
            b.checkOut,
            b.guests,
            b.roomType,
            b.totalPrice,
        ),
    )
    conn.commit()
    booking_id = cur.lastrowid
    row = cur.execute("SELECT * FROM bookings WHERE id = ?", (booking_id,)).fetchone()
    conn.close()
    return {
        "id": row["id"],
        "name": row["name"],
        "email": row["email"],
        "phone": row["phone"],
        "accommodationId": row["accommodation_id"],
        "accommodationName": row["accommodation_name"],
        "checkIn": row["check_in"],
        "checkOut": row["check_out"],
        "guests": row["guests"],
        "roomType": row["room_type"],
        "totalPrice": row["total_price"],
        "bookingDate": row["booking_date"],
    }


@app.get("/bookings", response_model=List[BookingOut], tags=["bookings"])
def list_bookings():
    conn = get_db_connection()
    cur = conn.cursor()
    rows = cur.execute("SELECT * FROM bookings ORDER BY id DESC").fetchall()
    conn.close()
    result = []
    for row in rows:
        result.append(
            {
                "id": row["id"],
                "name": row["name"],
                "email": row["email"],
                "phone": row["phone"],
                "accommodationId": row["accommodation_id"],
                "accommodationName": row["accommodation_name"],
                "checkIn": row["check_in"],
                "checkOut": row["check_out"],
                "guests": row["guests"],
                "roomType": row["room_type"],
                "totalPrice": row["total_price"],
                "bookingDate": row["booking_date"],
            }
        )
    return result


if __name__ == '__main__':
    # Simple debug run
    import uvicorn

    uvicorn.run("app:app", host="127.0.0.1", port=5000, log_level="info")
