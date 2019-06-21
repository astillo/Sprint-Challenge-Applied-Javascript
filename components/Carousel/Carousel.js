class Carousel {
    constructor(element){
        this.element = element
        this.leftB = document.querySelector('.left-button')
        this.rightB = document.querySelector('.right-button')
        this.img = document.querySelectorAll('.carousel img')
        console.log(this.img)
        this.index = 0
        this.rightB.addEventListener('click', () => this.toTheRight())
        this.leftB.addEventListener('click', ()=> this.toTheLeft())
        console.log(this.index)
        if(this.index==0){
            this.img[0].style.display = 'flex'
            this.leftB.style.display = 'none'
        }
    }
    toTheRight() {
        
        this.index = this.index + 1
        //this.img[this.index].style.display = 'flex'
        this.updateImg(this.index)
        console.log(this.index)
        // if (this.index >=3){
        //     this.rightB.style.display = 'none'
        // }
    }
    toTheLeft() {
        this.index = this.index - 1
        this.decreaseImg(this.index)
        console.log(this.index)
    }
    updateImg(index){
        this.leftB.style.display = 'flex'
        this.img[index-1].style.display = 'none'
        this.img[index].style.display = 'flex'
        if(index>=3){
            this.rightB.style.display = 'none'
        }
    }
    decreaseImg(index){
        this.rightB.style.display = 'flex'
        this.img[index + 1].style.display = 'none'
        this.img[index].style.display = 'flex'
        if(index == 0){
            this.leftB.style.display = 'none'
        }
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
