class ApartCardComponent{
    constructor(props){
        this.props = props;
       
        this.init()
    }


    init = ()=>{
        const {type,owner,roomCount,squares,address,price,imgSrc}= this.props
        this.htmlElement = document.createElement('article')
        this.htmlElement.className = `card p-3 shadow  col-sm-2 col-xs-1 col-lg-3 col-lx-4 `
        this.htmlElement.innerHTML = `
        <img src="${imgSrc}" class="card-img-top" style="height:400px;object-fit: cover;" />
        <div class="card-body">
          <h5 class="card-title text-center">${type}</h5>
          
          </div>
        </div>
      `;
    }
}