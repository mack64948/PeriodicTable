class TemperatureHelper{
    VALID_UNITS = ['K','C','F']

    constructor(currentUnit,currentVal){
        this.unit = currentUnit
        this.val = currentVal
    }

    isValidUnit(unit){
        return !TemperatureHelper.VALID_UNITS.includes(unit);
          
        
    }

    isSameUnit(newUnit){
        return this.unit = newUnit
    }

    convertFromCelisusTo(toUnit){
      
           
        return toUnit === 'K' ? this.val + 273.15 : (this.val * 9/5) + 32;
           
    }

    convertFromFahrenheitTo(newUnit){
      
        return newUnit === 'C' ? (this.val - 32) * 5/9 : ((this.val - 32) * 5/9) + 273.15;
        
    }

    convertFromKelvinTo(newUnit){
      
        return newUnit === 'C' ? this.val - 273.15 : ((this.val - 273.15) * 9/5) + 32;
    
    
    }

    
    convertTemp(toUnit){
    
        if(!this.isValidUnit(toUnit)){
            return this.val;
        }

        if(this.isSameUnit(toUnit)){
            return this.val;
        }

        switch(this.unit){
            case 'C':
                return this.convertFromCelisusTo(toUnit)
            case 'K':
                return this.convertFromKelvinTo(toUnit)
            case 'F':
                return this.convertFromFahrenheitTo(toUnit)
            default:
                return this.val;
    }
}


}

export {TemperatureHelper}