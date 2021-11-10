class ApartGridComponent {
    constructor() {

        this.state = {
            apartment: [],
            loading: false
        }
        this.init();
    }

    saveData = (apartment) => {
        this.state = {apartment, loading:false};
        this.render();
    }
    showError = error => { console.log(error) };

    getApart = () => API.getApart(this.saveData, this.showError);

    init = () => {
        this.state.loading = true;
        this.getApart();
        this.htmlElement = document.createElement('div');
        this.htmlElement.className ='row  g-3 '
        this.render()
    }

// wrapChild = (htmlElement) => {
//     const wrapper = document.createElement('div')
//     wrapper.className = 'col'
//     wrapper.append(htmlElement)
//     return wrapper
// }
   
    render = ()=>{
        const {loading} = this.state;
        if (loading){
            this.htmlElement.innerHTML = `<div class = "text-center"><img src="assets/loading.png"/></div>`
        }else{
            
     this.htmlElement.innerHTML =''   
    const cardComponents = this.state.apartment.map(x=>new ApartCardComponent(x))
    const cardElement = cardComponents.map(x=>x.htmlElement)
    this.htmlElement.append(...cardElement)

       }
    }
}