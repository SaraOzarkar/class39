class Form{

    

    
    display(){

        this.title=createElement('h2')
        this.title.html("CAR RACING GAME")
        this.title.position(200,100)

        this.input= createInput("Name")
        this.input.position(300,300)

        this.button= createButton("Play")
        this.button.position(300,400)
       

this.button.mousePressed( ()=>{
    this.input.hide()
    this.button.hide()

    var name= this.input.value()
    this.greetings= createElement('h1')
    this.greetings.html("hello " + name)
    this.greetings.position(200,200)
})
    }


}