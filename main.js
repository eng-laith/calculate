let screen = document.getElementById('screen');
let operType = '';
let values = {prev: null, new: null, total: null};
let isLastBtnNumber = false;
function getNumbers(num){

    if(isLastBtnNumber){
        let result;
        if(values.new){
            result = values.new + '' + num;
            values.new = result;
            screen.value = result;
        }else {
            result = values.prev + '' + num;
            values.prev = result;
            screen.value = result;
        }
    }else{
        screen.value = num;
        if(values.prev){
            values.new = num;
        }else{
            values.prev = num
        }
        isLastBtnNumber = true;
    }

   
}
function getOperators(oper){
    console.log(values)
    operType = oper
    isLastBtnNumber = false;
}
function calculate(){
    console.log('cal', values);
    if(!values.new){
        return;
    }
    if(values.new && values.prev && operType){
        if(operType === '+'){
            let newValue = Number(values.prev) + Number(values.new);
            screen.value = newValue;
            values.prev = newValue;
        }
        if(operType === '-'){
            let newValue = Number(values.prev) - Number(values.new);
            screen.value = newValue;
            values.prev = newValue;
        }
        if(operType === '*'){
            let newValue = Number(values.prev) * Number(values.new);
            screen.value = newValue;
            values.prev = newValue;
        }
        if(operType === '/'){
            let newValue = Number(values.prev) / Number(values.new);
            screen.value = newValue;
            values.prev = newValue;
        }
    }
    isLastBtnNumber = false;
}