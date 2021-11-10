class ApartCardComponent{
    constructor(props){
        this.props = props;
       
        this.init()
    }


    init = ()=>{
        this.htmlElement = document.createElement('article')
        this.htmlElement.className = `card p-3 shadow  col-sm-2 col-xs-1 col-lg-3 col-lx-4 `
        this.htmlElement.innerHTML = `FFF`

    }
}