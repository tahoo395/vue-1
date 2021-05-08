let like= new Vue({
    el: ".elements",
    data: {
        likes: [],
        views:[],
    },
    methods: {
        addLikes() {
            this.likes.push(1)
            this.views.push(1)
            // document.querySelector(".progress-bar").style=like.progress()
        },
        unlike() {
            this.likes.pop()
            if (this.likes.length > 0) { this.views.push(1) }
            // document.querySelector(".progress-bar").style=like.progress()
        },
        progress() {
            width=Math.round(this.likes.length/this.views.length*100)
            return `<style>.progress-bar{width: ${width}% ;}</style>`
        }
    },
})