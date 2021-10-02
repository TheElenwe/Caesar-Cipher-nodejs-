//A Javascript Program to illustrate Caesar Cipher Technique
     
    // Encrypts text using a shift od s
    const readlineSync = require('readline-sync');
    
    function encrypt(text, s)
    {
        let result=""
        
        
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
             
            if (char.toLowerCase())
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                result += ch;
                
            } 
             else{
               let ch =String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
              result += ch
            
            }
           
        }
        return result;
     
        
        
    }
     
    // Driver code
    text= readlineSync.question("give number:")
    s=Number(readlineSync.question("dwse: "));
    console.log(encrypt(text,s))
     