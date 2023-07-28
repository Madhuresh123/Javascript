//bubble sorting

    let arr = [8,3,9,4,5,2,7,3,1];


    for(let i=0;i<arr.length;i++){

        for(let j=0 ; j<arr.length-i-1; j++){

            if(arr[j]>arr[j+1]){
            temp =0;
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

            }
        }
    }

  print(arr)
