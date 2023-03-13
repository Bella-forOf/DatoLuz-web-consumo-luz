import Form from "./form";
function Main() {
    return (
      <>
        <div className="main">
            <section>
            <p className="main__text"> 
            DatoLuz es la Web que estabas esperando.  Podrás calcular de la forma más fácil y sencilla cuanto consume un aparato eléctrico en un periodo de tiempo en concreto. Interesante ¿verdad?  Es muy simple, primero solo tienes que indicar a qué precio tienes el kilovatio/hora, segundo solo necesitas poner la potencia en W del aparato que quieras calcular el consumo y finalmente el tiempo que te interese saber. Y ¡magia! aparecerá el precio. 
Abajo tienes una tabla con los consumos medios de los electrodomésticos más comunes, es solo orientativo. 
Y no dudes consultar nuestro apartado de ¿sabías que? Para poder enterarte de los datos más curiosos sobre el consumo de luz, o nuestro apartado de tarifas actuales, para conocer los mejores estudios de mercado actualizados trimestralmente de las mejores tarifas. 

</p>
            </section>
          <section>


<form>
<div>
      <label>
        Precio de energia contratada:
        <input
          type="number"
          value="potencia"
          placeholder="0,16"
        />
      </label>
</div>
<div><p> Aparato</p>
            <p> Potencia (W)</p>
            <p> Horas/Uso</p>
            <p> Importe (euros)</p>
            </div>
</form>


          
        
       
<Form></Form>
<Form></Form>


          </section>
          </div>
       
      </>
    );
  }
  
  export default Main;