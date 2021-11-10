const serverURL = 'http://localhost:3000';

class API { 

    static getApart = (success, failure) => { 
      setTimeout(()=>{
           fetch(`${serverURL}/apartment`) 
          .then(res => res.json()) 
          .then(success)
          .catch(failure) 
        }, 1000)
    } 

  static deleteApart = (id, success, failure) => {
    fetch(`${serverURL}/apartment/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}

API.getApart(
  (duomenys) => console.log('gavau duomenis', duomenys), 
  (klaida) => console.error('klaida!!!', klaida) 
)


// API.deleteApart(
//   '1', 
//   (duomenys) => console.log('gavau duomenis', duomenys), 
//   (klaida) => console.error('klaida!!!', klaida) 
// )