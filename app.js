const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfus'},
                {title: 'the way of kings', author: 'brandon sandernon'},
                {title: 'the last empire', author: 'brandon sanderson'}
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