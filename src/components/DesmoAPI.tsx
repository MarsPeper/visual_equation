import React, { useEffect } from 'react';
const Desmos = require('desmos');

function DesmoAPI() {
  useEffect(() => {
    var elt = document.getElementById('calculator');
    const calculator = Desmos.ScientificCalculator(elt);

    return () => {
      calculator.destroy();
    };
  }, []);

  return (null);
}

export default DesmoAPI;
