let like = new Vue({
    //get the element by el
    el: ".elements",
    data: {
        //initial values of likes and views
        likes: 0,
        views:0,
    },
    methods: {
        addLikes() {
            //add 1 to likes and views 
            this.likes+=1
            this.views+=1
        },
        unlike() {
            //decrease 1 from likes and add 1 to views
            if(this.likes>0){this.likes-=1}
            if (this.likes > 0) { this.views+=1 }
        },
        progress() {
            //progress bar progressing
            width=Math.round(this.likes/this.views *100)
            return `<style>.progress-bar{width: ${width}% ;}</style>`
        }
    },
})