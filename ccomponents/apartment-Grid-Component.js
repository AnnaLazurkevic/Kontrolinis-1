class ApartGridComponent{
    constructor(){
    
        this.state = {
            apartment: [],
            loading: false
        }
        this.init();
    }

saveData = (apartment)=>{
    this.state.apartment = apartment;
    this.render();
}
showError = error=>{console.log(error)};

    init = ()=>{
     this.htmlElement = document.createElement('div');
    }

    render = () =>
    console.log(this.state.apartment)




}