Javascript Execution context

{}=>global Execution context
js=>single threaded

1 global Execution context
2 Function Execution context
3 Eval Execution context

{}=>Memory creation phase

for example
 let val=10;
 let val2=5;
 Function addNum(num1,num2){
    return num1+num2
 }
 let result=addNum(num1,num2);
 let result1=addNum(1,2);

 int Memory phase          |      In Execution phase
 num1-undefined            |      num1-10;
 num2-undefined            |      num2-5;
 addNum-defination         |      addNum
 result-undefined          |
 result1-undefined         |

