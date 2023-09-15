
const app = Vue.createApp({
    data() {
        return {
            coffeeShops: [
                { id: 1, name: 'Mocha Moments',image: 'https://github.com/pondlnwtrue007/Lab6-cafeBookings/blob/master/img/image1.jpg?raw=true' },
                { id: 2, name: 'Latte Lounge',image: 'https://github.com/pondlnwtrue007/Lab6-cafeBookings/blob/master/img/image2.jpg?raw=true'},
                { id: 3, name: 'Espresso Essence',image: 'https://github.com/pondlnwtrue007/Lab6-cafeBookings/blob/master/img/image3.jpg?raw=true'},
                { id: 4, name: 'Brewed Bliss',image: 'https://github.com/pondlnwtrue007/Lab6-cafeBookings/blob/master/img/image4.jpg?raw=true'},
                { id: 5, name: 'Cappuccino Corner',image: 'https://github.com/pondlnwtrue007/Lab6-cafeBookings/blob/master/img/image5.jpg?raw=true'},
                { id: 6, name: 'Java Journeys',image: 'https://github.com/pondlnwtrue007/Lab6-cafeBookings/blob/master/img/image6.jpg?raw=true'},
                // ... ร้านอื่นๆ
            ],
            currentShop: {},
            booking: {
                name: '',
                phone: '',
                date: '',
                time: '',
                tables: 1
            },
            bookings: []
        };
    },
    methods: {
        deleteBooking(bookingId) {
            this.bookings = this.bookings.filter(book => book.id !== bookingId)
        },
        bookTable() {
            this.bookings.push({
                id: Date.now(),  // ใช้ timestamp เป็น id ของการจอง (ไม่น่าจะมีซ้ำกัน)
                shopName: this.currentShop.name,
                name: this.booking.name,
                phone: this.booking.phone,
                date: this.booking.date,
                time: this.booking.time,
                tables: this.booking.tables
            });
            this.clearBookingForm();
            // ปิด modal หลังจากส่งข้อมูลการจอง
            var bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
            bookingModal.hide();
        },
        clearBookingForm() {
            this.booking.name = '';
            this.booking.phone = '';
            this.booking.date = '';
            this.booking.time = '';
            this.booking.tables = 1;
        }
    },
});

app.mount("#app");
