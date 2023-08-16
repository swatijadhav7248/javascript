 

 const array = [10,5,'a','b','h',11];

 console.log(`Given array is: [${array}]`);

  const sorter = (a,b) => {
    if(typeof a==='number' && typeof b==='number') {
        return a-b;
    }else if(typeof a==='number' && typeof b !=='number') {
        return -1;
    }else if(typeof a !=='number' && typeof b ==='number') {
        return 1;
    } else {
        return a>b ? 1:-1;
    }
  }
  array.sort(sorter);


  const slicedArray = array.slice(3);
  console.log(`Sorting array of alphabets is : [${slicedArray}]`);

  const arraySpliced = array.splice(3);
  console.log(`Sorting array of numbers is : [${array}]`);