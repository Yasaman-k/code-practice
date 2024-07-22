const dayOfWeek =`Saturday
Sunday
Monday
Tuesday
Wednesday
Thursday
Friday`

const input =`Tuesday
53
67
32
73
88
59
78
3
30
15
31
56
32
79
83
17
50
4
49
97
75
2
56
62
77
98
47
97
56
62`

const converInputToArr =(input=>input.split('\n')) 
const mainArr= converInputToArr(input) 
const MaindayArr =converInputToArr(dayOfWeek)
const arrNumbers = mainArr.slice(1).map((x)=>Number(x))

const convertARR =()=>{
   const arrIndex= MaindayArr.findIndex(x=> x===mainArr[0])
    const newArr = arrNumbers.map((x,index)=>{
        return {[MaindayArr[(arrIndex+index)%7]]:x}
    })
    return(newArr);
}

const newArr1 = MaindayArr.map(element => {
   const a = convertARR().filter((obj)=>{
     return obj[element] 
    })
    const b=  a.map((x)=>Object.values(x)[0])
    const c = [b].map((s)=>{
      return  ((s.reduce((pre,cur)=>pre+cur,0)) / s.length).toString().split('.')[0]
    })
    return c
});

const ave = arrNumbers.reduce((pre,cur)=>pre+cur,0) 
