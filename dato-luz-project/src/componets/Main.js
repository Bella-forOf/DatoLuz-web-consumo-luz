import Form from './form';
function Main() {
  return (
    <>
      <div className="main">
        <section>
          <div>
            
            <h3>DatoLuz es la Web que estabas esperando.</h3>
            <p className="main__text">
              En ella podrás calcular de la forma más fácil y sencilla cuanto
              consume un aparato eléctrico en un periodo de tiempo en concreto.
              Interesante ¿verdad? Es muy simple.
            </p>
          </div>

          <div className='main_div2'>
            <h4>Primero </h4>
            <p>solo tienes que indicar a qué precio tienes el kilovatio/hora</p>
            <h4>Segundo</h4>
            <p>
              solo necesitas poner la potencia en W del aparato que quieras
              calcular el consumo
            </p>
            <h4>Tercero</h4>
            <p>el tiempo que te interese saber</p>
          </div>

          <h5>Y ¡magia! aparecerá el precio. </h5>
        </section>
        <section className='main_section'>
          <form>
            <div>
              <label for="energy">
                Precio de energia contratada:</label>
                <input type="text" name="energy" value="" placeholder="0,16" />
              
            </div>
          
          </form>

          <Form></Form>
          
        </section>
        <div>
          <p className="main__text">
            Aqui tienes una tabla con los consumos medios de los
            electrodomésticos más comunes, es solo orientativo. Y no dudes
            consultar nuestro apartado de ¿sabías que? Para poder enterarte de
            los datos más curiosos sobre el consumo de luz, o nuestro apartado
            de tarifas actuales, para conocer los mejores estudios de mercado
            actualizados trimestralmente de las mejores tarifas.
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
