
const app = Vue.createApp({
    data() {
        return {
            coffeeShops: [
                 { id: 1, name: 'Table 1',image: 'https://static.wixstatic.com/media/e01c8b_02f099c0971c4de9970f95033faba008~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_auto/e01c8b_02f099c0971c4de9970f95033faba008~mv2.jpg' },
                { id: 2, name: 'Table 2',image: 'https://inwfile.com/s-k/sdrpit.jpg'},
                { id: 3, name: 'Table 3',image: 'https://s.alicdn.com/@sc04/kf/HTB15SKpRFXXXXXbXXXXq6xXFXXXV.jpg_720x720q50.jpg'},
                { id: 4, name: 'Table 4',image: 'https://sc02.alicdn.com/kf/HTB18UN1RFXXXXbMXFXXq6xXFXXXd/230636061/HTB18UN1RFXXXXbMXFXXq6xXFXXXd.jpg'},
                { id: 5, name: 'Table 5',image: 'https://www.bangkokchair.com/imgadmins/detail_th/Detail_1679298253.jpg'},
                { id: 6, name: 'Table 6',image: 'https://www.bangkokchair.com/imgadmins/detail_th/Detail_1657522916.jpg'},
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
