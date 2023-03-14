function Form() {
    return (
      <>
        <div >
        
           
        <form >
            
            <div className="form"> 
            <label for="aparato">
                Aparato </label>
                    <input className="form_input"
                      type="text"
                      name="aparato"
                      value= ""
                      placeholder="lavadora"
                    />
                 <label for="potencia">
                Potencia (W) </label>
                    <input className="form_input"
                      type="text"
                      name="potencia"
                      value=""
                      placeholder="1500"
                    />
                    <label for="horas">
                Horas/Uso </label>
          <input className="form_input"
                      type="text"
                      name="Horas"
                      value=""
                      placeholder="15"
                    />
                    <label for="importe">
                Importe consumido</label>
                 <input className="form_input"
                      type="text"
                      name="importe"
                      value=""
                      placeholder="0.25"
                    />
             </div>
          </form>
        </div>
      </>
    );
  }
  
  export default Form;
  