//__________________________________________
function takearr(input) {
 
    var positive = 0
    var negative = 0
    for ( let i = 0; i <input.length ; i++)
   {
         if ( input[i] > 0)
         {
            positive+= 1;
         } 
         else //if (input[i] < 0)
         {
           negative +=  input[i] 
         }
   }
      return [positive, negative ]
   }
   console.log(takearr([-1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
   //__________________________________________

   function takearr(input) {
 
    var positive = 0
    var negative = 0
     if( input.lenght == 0)
      {
           return input;
      }
      else {
       for ( let i = 0; i <input.length ; i++)
        {   
      
       
             if ( input[i] > 0)
             {
               positive+= 1;
             } 
             else //if (input[i] < 0)
             {
               negative +=  input[i] 
             } 
     
         
   } return [positive, negative ]
   }
   
      
   }
   console.log(takearr([]))
   //_________________________________