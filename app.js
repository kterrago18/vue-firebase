const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfus', img: 'assets/1.jpg'},
                {title: 'the way of kings', author: 'brandon sandernon', img: 'assets/2.jpg'},
                {title: 'the last empire', author: 'brandon sanderson', img: 'assets/3.jpg'}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, data) {
            if (data) {
                console.log(event.type, data)
                return
            }
            console.log(event.type)
        },
        handleMouseMoveEvent(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')