export const fnValidate=(obj)=>{
    const {name,val} = obj
    obj.errormsg=''
    obj.isshowerrormsg=false
    switch(name){
        case 'Question':
            if(!val){
                obj.errormsg = 'please Enter Question'
            }else{
                if(val.length < 10){
                    obj.errormsg="Question shold container min 10 chars"
                }
            }
          if(obj.errormsg){
            obj.isshowerrormsg=true
          }
          break
          case 'opiton1':
          case 'opiton2':
          case 'opiton3':
          case 'opiton4':  
            if(!val){
                obj.errormsg=`please enter ${name}`
                obj.isshowerrormsg=true
            }
            break;
            case 'Type':
            case 'Answer':
                if(!val){
                    obj.errormsg=`please enter ${name}`
                    obj.isshowerrormsg=true
                }
    }


}