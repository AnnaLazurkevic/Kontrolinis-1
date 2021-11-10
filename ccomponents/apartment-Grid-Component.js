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
        this.render()
    }

   
    render = ()=>{
        const {loading} = this.state;
        if (loading){
            this.htmlElement.innerHTML = 'siunčiama...'
        }else{
            this.htmlElement.innerHTML = 'Parsiųsta'
        }
    
}

}