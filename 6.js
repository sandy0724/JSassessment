
 

//   6.	Convert [1,2,3,4,5] to [6,12,24,30,36,48] using for loop, push, pop etc.
           		
        var s1 = ["1","2","3","4","5"];
        var a;
        for (int i=0; i<s1.length,i++)
        {
            s1[i] = s1[i] * 6;
            console.log(s1[i]);

        }
       
       
        //6 12 ,18 24 30

        //6 12 ,18 24 30 36 48
        s1.push("36", "48");    
        var res1 = s1.slice(0, 3);
        res1.pop();
        var res2 = s1.slice(4, 6);

       res1= res1.push(res2);
        console.log(res1);

        

        }