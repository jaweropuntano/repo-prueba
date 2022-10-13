      //reduccion de condicional if tranformandolo en objetos.
      const suscripcion ={
        free: "tiene solo un mes",
        basico: "tiene pack basico",
        full: "tiene pack completo",
    };
    function packSuscripcion(suscripto){
        if(suscripcion[suscripto]){
            console.log(suscripcion[suscripto]);
            return;
        }
        console.warn("esa suscripcion no existe");
    }